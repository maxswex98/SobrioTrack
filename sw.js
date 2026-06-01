// Service worker — cache-first for app shell
const CACHE = 'diario-serale-v12';
const ASSETS = [
  './',
  './index.html',
  './styles/hifi-c.css',
  './hifi-c/app.jsx',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  'https://unpkg.com/react@18.3.1/umd/react.development.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js',
  'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js',
  'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(ASSETS.map((u) => cache.add(u).catch(() => null)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && (res.status === 200 || res.type === 'opaque')) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(req, clone)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

// Message from app → show notification from SW context (needed on some browsers)
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SHOW_NOTIFICATION') {
    self.registration.showNotification(e.data.title || 'SobrioTrack', {
      body: e.data.body,
      tag: e.data.tag,
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
    });
  }
});

// Periodic Background Sync — fires on Android Chrome even when app is closed
self.addEventListener('periodicsync', (e) => {
  if (e.tag !== 'daily-checkin') return;
  e.waitUntil((async () => {
    const now = new Date();
    const h = now.getHours();
    // Fire only in the 20:00–23:59 window (sync interval is ~1 day)
    if (h < 20) return;
    const clients = await self.clients.matchAll();
    // Don't notify if app is in foreground (the in-app polling handles it)
    if (clients.some(c => c.visibilityState === 'visible')) return;
    await self.registration.showNotification('SobrioTrack', {
      body: h < 22 ? 'Il diario è aperto. Quattro domande — poi chiudi.' : 'Ultimo avviso. Non chiudere la giornata senza un rapporto.',
      tag: 'daily-checkin',
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
    });
  })());
});

// Tap on notification → open the app
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.includes('index.html') || c.url.includes('SobrioTrack')) {
          return c.focus();
        }
      }
      return self.clients.openWindow('./index.html');
    })
  );
});
