// Shared wireframe primitives — sketchy phone frame + common doodles

const COLORS = {
  pac:   { main: 'oklch(0.72 0.14 155)', bg: 'oklch(0.92 0.05 155)', label: 'PAC' },
  smoke: { main: 'oklch(0.65 0.15 25)',  bg: 'oklch(0.93 0.05 25)',  label: 'Sigarette' },
  drink: { main: 'oklch(0.68 0.12 240)', bg: 'oklch(0.93 0.04 240)', label: 'Alcol' },
  bet:   { main: 'oklch(0.72 0.14 55)',  bg: 'oklch(0.93 0.05 55)',  label: 'Gioco' },
};

// Simple sketchy phone frame — ~320x640 wireframe size, with iOS cues drawn in sketchy style
function SketchPhone({ children, label, sub, tint = '#F5F2EA' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <div style={{
        width: 320, height: 660,
        background: tint,
        border: '2.5px solid #1A1814',
        borderRadius: 44,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '4px 4px 0 #1A1814, 8px 8px 0 rgba(26,24,20,0.12)',
      }}>
        {/* Dynamic island */}
        <div style={{
          position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
          width: 90, height: 24, borderRadius: 20, background: '#1A1814', zIndex: 20,
        }} />
        {/* Status bar (sketchy) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 42,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 26px', paddingTop: 12, fontFamily: 'Kalam, cursive',
          fontSize: 12, fontWeight: 700, color: '#1A1814', zIndex: 10,
        }}>
          <span>21:47</span>
          <span style={{ fontFamily: 'Caveat, cursive', fontSize: 14 }}>◵ ◈ ▪▫</span>
        </div>
        {/* Content */}
        <div className="ios-scroll" style={{
          position: 'absolute', inset: 0,
          paddingTop: 42, paddingBottom: 20,
          overflow: 'hidden',
        }}>
          {children}
        </div>
        {/* Home indicator */}
        <div style={{
          position: 'absolute', bottom: 7, left: '50%', transform: 'translateX(-50%)',
          width: 110, height: 4, borderRadius: 2, background: '#1A1814',
        }} />
      </div>
      {label && (
        <div style={{ textAlign: 'center', maxWidth: 320 }}>
          <div className="handwrite" style={{ fontSize: 22, fontWeight: 700, color: '#1A1814' }}>
            {label}
          </div>
          {sub && (
            <div className="handwrite-body" style={{ fontSize: 14, color: '#6A6458', marginTop: 2 }}>
              {sub}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// A "screen title bar" in sketchy style — replaces iOS large title
function SketchTitleBar({ title, right, back = true }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 16px 4px',
    }}>
      <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {back && <span style={{ fontFamily: 'Caveat, cursive', fontSize: 28, fontWeight: 700 }}>‹</span>}
      </div>
      <div className="handwrite" style={{ fontWeight: 700, fontSize: 18, color: '#1A1814' }}>
        {title}
      </div>
      <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Caveat, cursive', fontSize: 22 }}>
        {right || ''}
      </div>
    </div>
  );
}

// Little sparkline made of manual bars
function Sparkline({ bars = [3, 5, 2, 4, 6, 3, 5], color = '#1A1814', maxH = 40 }) {
  const max = Math.max(...bars);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: maxH }}>
      {bars.map((v, i) => (
        <div key={i} style={{
          width: 10,
          height: (v / max) * maxH,
          background: color,
          borderRadius: '2px 2px 0 0',
          opacity: 0.85,
        }} />
      ))}
    </div>
  );
}

// Squiggly line chart
function SquiggleChart({ d, color = '#1A1814', w = 260, h = 80, fill = false }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: h, display: 'block' }}>
      {fill && <path d={`${d} L ${w} ${h} L 0 ${h} Z`} fill={color} opacity="0.12" />}
      <path d={d} stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Trophy / flame icon (hand-drawn)
function FlameIcon({ size = 22, color = '#1A1814' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3 C 14 7, 17 8, 17 13 C 17 17, 14 20, 12 20 C 10 20, 7 17, 7 13 C 7 10, 9 9, 10 7 C 11 9, 11 5, 12 3 Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

function CoinIcon({ size = 22, color = '#1A1814' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" fill="none" />
      <text x="12" y="16" textAnchor="middle" fontFamily="Caveat" fontSize="13" fontWeight="700" fill={color}>€</text>
    </svg>
  );
}

function CigIcon({ size = 22, color = '#1A1814' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="10" width="16" height="5" rx="1" stroke={color} strokeWidth="2" fill="none" />
      <line x1="14" y1="10" x2="14" y2="15" stroke={color} strokeWidth="2" />
      <path d="M20 6 C 21 8, 19 9, 20 11" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function GlassIcon({ size = 22, color = '#1A1814' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M6 4 L 18 4 L 16 20 L 8 20 Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <line x1="7" y1="9" x2="17" y2="9" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function DiceIcon({ size = 22, color = '#1A1814' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="2" fill="none" />
      <circle cx="8" cy="8" r="1.3" fill={color} />
      <circle cx="16" cy="8" r="1.3" fill={color} />
      <circle cx="12" cy="12" r="1.3" fill={color} />
      <circle cx="8" cy="16" r="1.3" fill={color} />
      <circle cx="16" cy="16" r="1.3" fill={color} />
    </svg>
  );
}

function BellIcon({ size = 20, color = '#1A1814' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 17 C 5 11, 7 6, 12 6 C 17 6, 19 11, 19 17 Z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <circle cx="12" cy="20" r="1.5" fill={color} />
      <line x1="3" y1="17" x2="21" y2="17" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Tiny dot — for progress/segmented indicators
function Dot({ filled, color = '#1A1814', size = 8 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size,
      border: `1.5px solid ${color}`,
      background: filled ? color : 'transparent',
    }} />
  );
}

// Annotation arrow + text  (points from label down-left to target)
function Annotation({ text, rotate = -8, style = {} }) {
  return (
    <div style={{
      fontFamily: 'Caveat, cursive', fontSize: 17, fontStyle: 'italic',
      color: '#6A6458', transform: `rotate(${rotate}deg)`,
      lineHeight: 1.15, display: 'inline-block',
      ...style,
    }}>{text}</div>
  );
}

Object.assign(window, {
  COLORS,
  SketchPhone, SketchTitleBar,
  Sparkline, SquiggleChart,
  FlameIcon, CoinIcon, CigIcon, GlassIcon, DiceIcon, BellIcon,
  Dot, Annotation,
});
