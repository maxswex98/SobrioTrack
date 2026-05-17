// Hi-fi C — "Diario Serale" — single-file React app
// iPhone 12 mini · warm paper · militant coach tone

const { useState, useEffect, useRef } = React;

// ═══════════════════════════════════════════════════
// ICONS (stroke-based, warm paper aesthetic)
// ═══════════════════════════════════════════════════
const I = {
  Cig: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="10" width="15" height="4.5" rx="0.5"/><line x1="13" y1="10" x2="13" y2="14.5"/><path d="M20 5c1 1.5-1 2.5 0 4"/><path d="M22 5c1 1.5-1 2.5 0 4"/></svg>,
  Glass: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h10l-1.5 17h-7Z"/><line x1="8" y1="9" x2="16" y2="9"/></svg>,
  Dice: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1" fill={p.c||'currentColor'}/><circle cx="16" cy="8" r="1" fill={p.c||'currentColor'}/><circle cx="12" cy="12" r="1" fill={p.c||'currentColor'}/><circle cx="8" cy="16" r="1" fill={p.c||'currentColor'}/><circle cx="16" cy="16" r="1" fill={p.c||'currentColor'}/></svg>,
  Coin: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M14 8.5h-3a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3M12 7v1M12 16v1" strokeLinecap="round"/></svg>,
  Flame: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinejoin="round"><path d="M12 3c1.5 3 4.5 4.5 4.5 9A4.5 4.5 0 0 1 12 16.5a4.5 4.5 0 0 1-4.5-4.5c0-2 1.5-3 2.5-4.5.5 1 .5-2.5 2-4.5Z"/></svg>,
  Bell: (p) => <svg width={p.s||18} height={p.s||18} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round"><path d="M6 17V11a6 6 0 0 1 12 0v6"/><line x1="3" y1="17" x2="21" y2="17"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>,
  Menu: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="13" x2="20" y2="13"/><line x1="4" y1="19" x2="12" y2="19"/></svg>,
  Close: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>,
  Chev: (p) => <svg width={p.s||18} height={p.s||18} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2" strokeLinecap="round"><polyline points="9 6 15 12 9 18"/></svg>,
  Back: (p) => <svg width={p.s||20} height={p.s||20} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2" strokeLinecap="round"><polyline points="15 6 9 12 15 18"/></svg>,
  Plus: (p) => <svg width={p.s||18} height={p.s||18} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Check: (p) => <svg width={p.s||18} height={p.s||18} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 12 10 18 20 6"/></svg>,
  Home: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6"><path d="M4 11 12 4l8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1Z"/></svg>,
  Book: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6"><path d="M4 5v14a2 2 0 0 0 2 2h14V5a1 1 0 0 0-1-1H6a2 2 0 0 0-2 1Z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="14" y2="13"/></svg>,
  Chart: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round"><line x1="6" y1="18" x2="6" y2="13"/><line x1="12" y1="18" x2="12" y2="8"/><line x1="18" y1="18" x2="18" y2="10"/><line x1="4" y1="20" x2="20" y2="20"/></svg>,
  Cog: (p) => <svg width={p.s||22} height={p.s||22} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M12 4v2m0 12v2m8-8h-2M6 12H4m11.3-5.3-1.4 1.4M8.1 15.9l-1.4 1.4m0-10.6 1.4 1.4m8.5 8.5 1.4 1.4"/></svg>,
  Alert: (p) => <svg width={p.s||24} height={p.s||24} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 2 20h20Z"/><line x1="12" y1="10" x2="12" y2="14"/><circle cx="12" cy="17" r="0.5" fill={p.c||'currentColor'}/></svg>,
  Pencil: (p) => <svg width={p.s||16} height={p.s||16} viewBox="0 0 24 24" fill="none" stroke={p.c||'currentColor'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 20 8 8 20H4v-4Z"/></svg>,
};

// Status bar — iOS 15 style (since iPhone 12 mini)
const StatusBar = ({ dark = false, time = '21:47' }) => (
  <div className={`statusbar ${dark ? 'statusbar-dark' : ''}`}>
    <span>{time}</span>
    <div className="right">
      <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="6" rx="0.5"/><rect x="9" y="3" width="3" height="8" rx="0.5"/><rect x="13.5" y="1" width="3" height="10" rx="0.5"/></svg>
      <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor" style={{marginLeft:4}}><path d="M7.5 3a6.4 6.4 0 0 1 4.5 1.8l1-1A7.9 7.9 0 0 0 2 3.8l1 1A6.4 6.4 0 0 1 7.5 3Z"/><path d="M7.5 6a3.5 3.5 0 0 1 2.5 1l1-1a5 5 0 0 0-7 0l1 1a3.5 3.5 0 0 1 2.5-1Z"/><circle cx="7.5" cy="9" r="1.2"/></svg>
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none" style={{marginLeft:5}}><rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="currentColor" opacity="0.4"/><rect x="2" y="2" width="18" height="8" rx="1.4" fill="currentColor"/><rect x="22" y="4" width="1.5" height="4" rx="0.7" fill="currentColor" opacity="0.4"/></svg>
    </div>
  </div>
);

// iPhone 12 mini wrapper
const Phone = ({ children, statusDark = false }) => (
  <div className="phone-12mini">
    <div className="screen paper-texture">
      <div className="notch"/>
      <StatusBar dark={statusDark}/>
      <div className="home-indicator"/>
      {children}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════
function loadInitial() {
  try {
    const pacTotal = parseFloat(localStorage.getItem('pac-total')) || 0;
    const revolut = parseFloat(localStorage.getItem('revolut')) || 0;
    const limits = JSON.parse(localStorage.getItem('limits') || 'null') || { smoke: 5, drink: 3, bet: 0 };
    const saved = JSON.parse(localStorage.getItem('app-state') || 'null') || {};
    const todayKey = new Date().toISOString().slice(0, 10);
    const monthKey = todayKey.slice(0, 7); // "2026-05"
    const isNewDay = saved.journalDate && saved.journalDate !== todayKey;
    const isNewMonth = !saved.pacMonth || saved.pacMonth !== monthKey;
    // individual keys (written by onboarding/settings edit) win over older app-state snapshot
    return {
      pacThisMonth: false,
      pacChoice: null,
      pacMonth: monthKey,
      streaks: { smoke: 0, drink: 0, bet: 0 },
      today: { smoke: 0, drink: 0, bet: 0 },
      journalWritten: false,
      controlDays: 0,
      ...saved,
      ...(isNewDay ? { journalWritten: false, today: { smoke: 0, drink: 0, bet: 0 } } : {}),
      ...(isNewMonth ? { pacThisMonth: false, pacChoice: null, pacMonth: monthKey, pacMonthDone: false } : {}),
      pacTotal, revolut, limits,
    };
  } catch {
    return { pacTotal:0, revolut:0, limits:{smoke:5,drink:3,bet:0}, pacThisMonth:false, streaks:{smoke:0,drink:0,bet:0}, today:{smoke:0,drink:0,bet:0}, journalWritten:false, controlDays:0 };
  }
}
const initial = loadInitial();

// ═══════════════════════════════════════════════════
// SCREENS
// ═══════════════════════════════════════════════════

// ── HOME ──
function Home({ go, state }) {
  const total = state.pacTotal + state.revolut;
  const name = (() => { try { return localStorage.getItem('user-name') || ''; } catch { return ''; }})();
  const now = new Date();
  const dayNames = ['DOMENICA','LUNEDÌ','MARTEDÌ','MERCOLEDÌ','GIOVEDÌ','VENERDÌ','SABATO'];
  const monthNames = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
  const todayStr = `${now.getDate()} ${monthNames[now.getMonth()]}`;
  const dowStr = dayNames[now.getDay()];
  const monthLabel = monthNames[now.getMonth()];
  const controlDays = state.controlDays || 0;
  return (
    <div className="screen-body screen-enter">
      <div className="screen-scroll">
        <div style={{padding: '16px 24px 20px'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
            <div>
              <div className="kicker">{dowStr}</div>
              <div className="serif" style={{fontSize:34, lineHeight:1, marginTop:2}}>{todayStr}</div>
            </div>
            <div style={{display:'flex', gap:8}}>
              <button onClick={() => go('stats')} style={iconBtn}><I.Chart s={18}/></button>
              <button onClick={() => go('settings')} style={iconBtn}><I.Menu s={18}/></button>
            </div>
          </div>

          {/* Streak hero */}
          <div style={{
            marginTop: 20, padding: 22,
            background: 'var(--ink)', color: 'var(--paper)',
            borderRadius: 20, position: 'relative', overflow: 'hidden',
          }}>
            <div className="kicker" style={{color:'rgba(251,247,235,0.55)'}}>GIORNI DI CONTROLLO</div>
            <div style={{display:'flex', alignItems:'baseline', gap: 12, marginTop: 6}}>
              <span className="serif" style={{fontSize:84, lineHeight:0.9}}>{controlDays}</span>
              <div className="flame-pulse" style={{marginBottom:6}}>
                <I.Flame s={28} c="#C8A66B"/>
              </div>
            </div>
            <div className="serif-it" style={{fontSize:17, marginTop:4, opacity:0.8}}>
              {controlDays === 0 ? 'inizia stasera. fai il primo check-in.' : 'continua. un giorno alla volta.'}
            </div>
          </div>

          {/* Today's diary entry card */}
          <div
            onClick={() => go('detail-entry')}
            style={{
              marginTop: 16,
              background: 'var(--paper-2)',
              borderRadius: 18,
              padding: '16px 18px',
              cursor: 'pointer',
              border: '1px solid var(--paper-edge)',
            }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div className="kicker">DIARIO DI OGGI</div>
              <I.Chev s={14} c="var(--ink-mute)"/>
            </div>
            <div className="paper-lines" style={{marginTop:8, paddingTop:2}}>
              <div className="serif" style={{fontSize:19, lineHeight:'28px', color:'var(--ink-2)'}}>
                {state.journalWritten ? `${state.today.smoke} sigarett${state.today.smoke===1?'a':'e'}.` : 'nessun rapporto ancora.'}
              </div>
              <div className="serif-it" style={{fontSize:16, color:'var(--ink-mute)', lineHeight:'28px'}}>
                {state.journalWritten ? 'aggiornato stasera.' : 'apri il diario qui sotto.'}
              </div>
            </div>
          </div>

          {/* Vizi streak rows */}
          <div style={{marginTop: 16, display:'flex', flexDirection:'column', gap: 8}}>
            <StreakRow Icon={I.Cig} label="Sigarette" val={`${state.today.smoke} / ${state.limits.smoke}`} days={state.streaks.smoke} color="var(--smoke)" bg="var(--smoke-bg)" under={state.today.smoke <= state.limits.smoke}/>
            <StreakRow Icon={I.Glass} label="Alcol" val={`${state.today.drink} unità`} days={state.streaks.drink} color="var(--drink)" bg="var(--drink-bg)" under={state.today.drink <= state.limits.drink}/>
            <StreakRow Icon={I.Dice} label="Gioco" val={`${state.today.bet} €`} days={state.streaks.bet} color="var(--bet)" bg="var(--bet-bg)" under={state.today.bet <= state.limits.bet}/>
          </div>

          {/* Savings snapshot */}
          <div
            onClick={() => go('savings')}
            style={{
              marginTop: 16, padding: '14px 18px',
              background: 'var(--pac-bg)', borderRadius: 18,
              cursor: 'pointer',
            }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div className="kicker" style={{color:'var(--pac)'}}>RISPARMI</div>
              <I.Chev s={14} c="var(--pac)"/>
            </div>
            <div style={{display:'flex', gap:16, alignItems:'baseline', marginTop:6}}>
              <div>
                <div className="label-tiny">PAC</div>
                <div className="serif" style={{fontSize:26, lineHeight:1}}>€ {state.pacTotal.toLocaleString('it')}</div>
              </div>
              <div style={{width:1, height:30, background:'var(--pac)', opacity:0.25}}/>
              <div>
                <div className="label-tiny">Revolut</div>
                <div className="serif" style={{fontSize:26, lineHeight:1}}>€ {state.revolut}</div>
              </div>
              <div style={{flex:1}}/>
              <div className="chip" style={{background: state.pacThisMonth ? 'var(--pac)' : 'var(--paper-edge)', color: state.pacThisMonth ? 'var(--paper)' : 'var(--ink-mute)'}}>
                {state.pacThisMonth ? <><I.Check s={11}/> {monthLabel}</> : <>{monthLabel} ·  ?</>}
              </div>
            </div>
          </div>

          <button
            onClick={() => go('checkin-intro')}
            className="btn btn-primary btn-block"
            style={{marginTop: 22, padding: '18px 20px', fontSize: 16, fontFamily: 'Instrument Serif, serif', fontWeight: 400, letterSpacing: 0.3}}>
            Apri il diario di stasera
          </button>
          <div className="annot" style={{textAlign:'center', marginTop:8, fontSize:14}}>
            21:47 · ti aspetta
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="tabbar">
        <div className="tabbar-item active"><I.Home s={22}/>Oggi</div>
        <div className="tabbar-item" onClick={() => go('savings')}><I.Coin s={22}/>Risparmi</div>
        <div className="tabbar-item" onClick={() => go('stats')}><I.Chart s={22}/>Storia</div>
        <div className="tabbar-item" onClick={() => go('settings')}><I.Cog s={22}/>Patto</div>
      </div>
    </div>
  );
}

const iconBtn = {
  width: 36, height: 36, borderRadius: 999,
  border: 'none', background: 'var(--paper-2)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', color: 'var(--ink)',
};

function StreakRow({ Icon, label, val, days, color, bg, under }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', gap: 12,
      padding: '12px 14px',
      background: '#fff', borderRadius: 14,
      border: '1px solid var(--paper-edge)',
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10, background: bg,
        display:'flex', alignItems:'center', justifyContent:'center', color,
      }}>
        <Icon s={18} c={color}/>
      </div>
      <div style={{flex:1}}>
        <div style={{fontSize:14, fontWeight:600, color:'var(--ink)'}}>{label}</div>
        <div style={{fontSize:12, color:'var(--ink-mute)', marginTop:1}}>{val} · oggi</div>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:3, color: under ? color : 'var(--smoke)'}}>
        <I.Flame s={14}/>
        <span className="serif" style={{fontSize:22, lineHeight:1}}>{days}</span>
      </div>
    </div>
  );
}

// ── CHECK-IN INTRO ──
function CheckinIntro({ go }) {
  return (
    <div className="screen-body screen-enter" style={{background:'var(--ink)', color:'var(--paper)'}}>
      <div style={{position:'absolute', inset:0, background:'var(--ink)'}}/>
      <div style={{position:'relative', zIndex:1, flex:1, display:'flex', flexDirection:'column', padding:'40px 32px 32px'}}>
        <button onClick={() => go('home')} style={{...iconBtn, background:'rgba(251,247,235,0.1)', color:'var(--paper)', alignSelf:'flex-end'}}><I.Close s={18}/></button>
        <div style={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <div className="kicker" style={{color:'rgba(251,247,235,0.5)'}}>RAPPORTO SERALE</div>
          <div className="serif" style={{fontSize:48, lineHeight:1.05, marginTop:12}}>
            Quattro<br/>domande.<br/><span style={{color:'#C8A66B'}}>Una verità.</span>
          </div>
          <div className="serif-it" style={{fontSize:20, marginTop:20, opacity:0.75, lineHeight:1.4}}>
            Niente giustificazioni.<br/>Come è andata oggi?
          </div>
        </div>
        <button onClick={() => go('checkin-1')} className="btn" style={{background:'var(--paper)', color:'var(--ink)', fontFamily:'Instrument Serif', fontSize:17, padding:'16px'}}>
          Comincia il rapporto
        </button>
      </div>
    </div>
  );
}

// ── CHECK-IN STEP ──
// Generate [0, 1, ..., limit, limit+1] for int-based habits (smoke/drink)
function makeIntOpts(limit) {
  const count = Math.max(limit + 2, 4); // at least [0,1,2,3+]
  return Array.from({ length: count }, (_, i) => i);
}
// Generate monetary steps for gambling, always ending with limit+1 as "over"
function makeBetOpts(limit) {
  if (limit === 0) return [0, 1]; // 0=niente, 1=qualcosa (>0€)
  const candidates = [5, 10, 20, 50, 100, 200, 500];
  const steps = [0, ...candidates.filter(v => v < limit), limit, limit + 1];
  return [...new Set(steps)].sort((a, b) => a - b);
}
// Format option label: values over the limit get a '+' suffix
const fmtOpt = (n, key, limits) => {
  if (key === 'pac') return String(n);
  const lim = limits[key];
  if (n > lim) return key === 'bet' ? (lim === 0 ? '>0€' : `>${lim}€`) : `${n}+`;
  return String(n);
};

function CheckinStep({ go, step, state, setState }) {
  const monthNames = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
  const currentMonth = monthNames[new Date().getMonth()];
  const STEPS = [
    { key:'smoke', Icon: I.Cig, color:'var(--smoke)', bg:'var(--smoke-bg)',
      q:'Quante sigarette\nhai fumato oggi?', limit: state.limits.smoke, unit:'',
      opts: makeIntOpts(state.limits.smoke), current: state.today.smoke,
      set: v => setState(s => ({...s, today:{...s.today, smoke:v}})) },
    { key:'drink', Icon: I.Glass, color:'var(--drink)', bg:'var(--drink-bg)',
      q:'Unità di alcol?', limit: state.limits.drink, unit:'unità',
      opts: makeIntOpts(state.limits.drink), current: state.today.drink,
      set: v => setState(s => ({...s, today:{...s.today, drink:v}})) },
    { key:'bet', Icon: I.Dice, color:'var(--bet)', bg:'var(--bet-bg)',
      q:'Speso in gioco?', limit: state.limits.bet, unit:'€',
      opts: makeBetOpts(state.limits.bet), current: state.today.bet,
      set: v => setState(s => ({...s, today:{...s.today, bet:v}})) },
    { key:'pac', Icon: I.Coin, color:'var(--pac)', bg:'var(--pac-bg)',
      q:`PAC di ${currentMonth}.\n200 €.`, limit: null, unit:'',
      opts:['✓ versato', 'saltato', 'dopo'], current: state.pacThisMonth ? '✓ versato' : state.pacChoice,
      locked: state.pacThisMonth,
      set: v => { if (!state.pacThisMonth) setState(s => ({...s, pacThisMonth: v === '✓ versato', pacChoice: v})); } },
  ];
  const cur = STEPS[step];
  const pct = ((step + 1) / 4) * 100;
  const overLimit = typeof cur.current === 'number' && cur.limit !== null && cur.current > cur.limit;

  return (
    <div className="screen-body screen-enter">
      <div style={{padding: '18px 24px 0'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <button onClick={() => step === 0 ? go('home') : go(`checkin-${step}`)} style={{...iconBtn, background:'transparent'}}>
            {step === 0 ? <I.Close s={20}/> : <I.Back s={20}/>}
          </button>
          <div style={{flex:1, margin:'0 16px', height:4, background:'var(--paper-edge)', borderRadius:2, position:'relative'}}>
            <div style={{position:'absolute', left:0, top:0, bottom:0, width:`${pct}%`, background:'var(--ink)', borderRadius:2, transition:'width 0.4s'}}/>
          </div>
          <div className="mono" style={{fontSize:12, color:'var(--ink-mute)'}}>{step+1}/4</div>
        </div>
      </div>

      <div className="screen-scroll fade-up" style={{padding:'32px 28px 20px'}} key={step}>
        <div style={{
          width:56, height:56, borderRadius:14, background: cur.bg, color: cur.color,
          display:'flex', alignItems:'center', justifyContent:'center', marginBottom: 22,
        }}>
          <cur.Icon s={28} c={cur.color}/>
        </div>
        <div className="serif" style={{fontSize:36, lineHeight:1.05, whiteSpace:'pre-line'}}>
          {cur.q}
        </div>
        {cur.limit !== null && (
          <div className="mono" style={{fontSize:11, color:'var(--ink-mute)', marginTop:10, letterSpacing:'0.1em'}}>
            LIMITE · {cur.limit}{cur.key==='bet'?' €':''}
          </div>
        )}

        {/* PAC già confermato questo mese */}
        {cur.locked && (
          <div style={{marginTop:16, padding:'10px 14px', background:'var(--pac-bg)', borderRadius:12, display:'flex', alignItems:'center', gap:8}}>
            <I.Check s={14} c="var(--pac)"/>
            <span className="mono" style={{fontSize:11, color:'var(--pac)', letterSpacing:'0.08em'}}>GIÀ CONFERMATO PER {currentMonth.toUpperCase()}</span>
          </div>
        )}

        {/* Options */}
        <div style={{
          display:'grid',
          gridTemplateColumns: cur.key === 'pac' ? '1fr' : 'repeat(3, 1fr)',
          gap: 10, marginTop: 20,
          opacity: cur.locked ? 0.5 : 1,
          pointerEvents: cur.locked ? 'none' : 'auto',
        }}>
          {cur.opts.map((n, i) => {
            const selected = cur.current === n;
            return (
              <div
                key={i}
                onClick={() => cur.set(n)}
                className="tap-num"
                style={{
                  aspectRatio: cur.key === 'pac' ? '7' : '1.4',
                  borderRadius: 14,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  background: selected ? cur.color : cur.bg,
                  color: selected ? 'var(--paper)' : 'var(--ink)',
                  fontFamily: 'Instrument Serif, serif',
                  fontSize: cur.key === 'pac' ? 17 : 28,
                  border: selected ? 'none' : `1px solid ${cur.bg}`,
                  transition: 'background 0.15s',
                }}>
                {fmtOpt(n, cur.key, state.limits)}
              </div>
            );
          })}
        </div>

        {overLimit && (
          <div className="fade-in" style={{
            marginTop: 24, padding: '14px 16px',
            background: 'var(--smoke)', color: 'var(--paper)',
            borderRadius: 14, display:'flex', gap:10, alignItems:'flex-start',
          }}>
            <I.Alert s={22} c="var(--paper)"/>
            <div>
              <div style={{fontWeight:700, fontSize:14}}>OLTRE IL LIMITE.</div>
              <div className="serif-it" style={{fontSize:15, marginTop:2, opacity:0.9}}>
                Bastava poco. Hai ceduto.
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{padding:'16px 24px 20px'}}>
        <button
          onClick={() => step === 3 ? go('checkin-done') : go(`checkin-${step+2}`)}
          className="btn btn-primary btn-block"
          style={{padding:'16px', fontFamily:'Instrument Serif, serif', fontSize:17, fontWeight:400}}>
          {step === 3 ? 'Chiudi il rapporto' : 'Prossima'}
        </button>
      </div>
    </div>
  );
}

// ── CHECK-IN DONE ──
function CheckinDone({ go, state, setState }) {
  // Snapshot today's values and streaks at mount before any state update
  const snap = useRef({ ...state.today, pac: state.pacThisMonth, streaks: { ...state.streaks } }).current;
  const overSmoke = snap.smoke > state.limits.smoke;
  const overDrink = snap.drink > state.limits.drink;
  const overBet = snap.bet > state.limits.bet;
  const anyOver = overSmoke || overDrink || overBet;

  React.useEffect(() => {
    if (anyOver) return;
    const today = new Date();
    const dateKey = today.toISOString().slice(0,10);
    let entries = [];
    try { entries = JSON.parse(localStorage.getItem('entries') || '[]'); } catch {}
    if (entries.find(e => e.date === dateKey)) return;
    const newEntry = { date: dateKey, smoke: snap.smoke, drink: snap.drink, bet: snap.bet, pac: snap.pac };
    entries.unshift(newEntry);
    try { localStorage.setItem('entries', JSON.stringify(entries.slice(0,365))); } catch {}
    const monthKey = dateKey.slice(0, 7);
    setState(s => {
      // Add +200 only once per month when PAC is first confirmed
      const pacConfirmedNow = snap.pac && !s.pacMonthDone;
      const newPacTotal = pacConfirmedNow ? (s.pacTotal || 0) + 200 : s.pacTotal;
      if (pacConfirmedNow) {
        try { localStorage.setItem('pac-total', String(newPacTotal)); } catch {}
      }
      return {
        ...s,
        controlDays: (s.controlDays || 0) + 1,
        journalWritten: true,
        journalDate: dateKey,
        pacThisMonth: snap.pac || s.pacThisMonth,
        pacChoice: snap.pac ? '✓ versato' : (s.pacThisMonth ? '✓ versato' : s.pacChoice),
        pacMonthDone: s.pacMonthDone || pacConfirmedNow,
        pacTotal: newPacTotal,
        streaks: {
          smoke: s.today.smoke <= s.limits.smoke ? (s.streaks.smoke || 0) + 1 : 0,
          drink: s.today.drink <= s.limits.drink ? (s.streaks.drink || 0) + 1 : 0,
          bet: s.today.bet <= s.limits.bet ? (s.streaks.bet || 0) + 1 : 0,
        },
      };
    });
  }, []);

  if (anyOver) return <Sgarro go={go} state={state} setState={setState} snap={snap} overSmoke={overSmoke} overDrink={overDrink} overBet={overBet}/>;

  const todayStr = new Date().toLocaleDateString('it-IT', {day:'numeric', month:'short'}).toUpperCase();
  const newStreak = (snap.streaks?.smoke || 0) + 1;

  return (
    <div className="screen-body screen-enter">
      <div className="screen-scroll" style={{padding:'40px 28px 20px'}}>
        <div className="kicker">RAPPORTO DEL {todayStr}</div>
        <div className="serif" style={{fontSize:44, lineHeight:1.05, marginTop:8}}>
          Giornata<br/>in ordine.
        </div>
        <div className="serif-it" style={{fontSize:19, marginTop:12, color:'var(--ink-3)', lineHeight:1.4}}>
          Streak <span style={{color:'var(--pac)'}}>+1 giorno</span>.<br/>
          Tenuto duro. Continua così.
        </div>

        <div style={{marginTop:28, background:'var(--paper-2)', borderRadius:18, padding:18, border:'1px solid var(--paper-edge)'}}>
          <div className="paper-lines" style={{fontFamily:'Instrument Serif, serif', fontSize:19, lineHeight:'28px', color:'var(--ink-2)'}}>
            <div>{snap.smoke} sigarett{snap.smoke===1?'a':'e'}. {snap.smoke <= state.limits.smoke ? 'sotto limite.' : 'oltre limite.'}</div>
            <div style={{fontStyle:'italic', color:'var(--ink-mute)'}}>{snap.drink === 0 ? 'niente alcol' : `${snap.drink} unità di alcol`}. {snap.bet === 0 ? 'niente gioco.' : `${snap.bet} € di gioco.`}</div>
            <div style={{fontStyle:'italic', color:'var(--ink-mute)'}}>PAC: {snap.pac ? 'versato' : 'in sospeso'}.</div>
          </div>
          <div style={{marginTop:14, display:'flex', alignItems:'center', gap:8}}>
            <div style={{flex:1, height:1, background:'var(--paper-edge)'}}/>
            <div className="mono" style={{fontSize:10, color:'var(--ink-mute)', letterSpacing:'0.15em'}}>21:51</div>
          </div>
        </div>

        <div style={{marginTop:28, display:'flex', justifyContent:'center', alignItems:'baseline', gap:12}}>
          <span className="serif" style={{fontSize:72, lineHeight:1}}>{newStreak}</span>
          <div className="flame-pulse"><I.Flame s={26} c="var(--pac)"/></div>
        </div>
        <div className="kicker" style={{textAlign:'center', marginTop:4}}>GIORNI DI FILA</div>
      </div>
      <div style={{padding:'16px 24px 20px'}}>
        <button onClick={() => go('home')} className="btn btn-primary btn-block" style={{padding:'16px', fontFamily:'Instrument Serif, serif', fontSize:17, fontWeight:400}}>
          Chiudi
        </button>
      </div>
    </div>
  );
}

// ── SGARRO ──
function Sgarro({ go, overSmoke, overDrink, overBet, state, snap }) {
  const s = snap || state.today;
  const labels = [];
  if (overSmoke) labels.push({t:'Sigarette', v:`${s.smoke} / ${state.limits.smoke}`});
  if (overDrink) labels.push({t:'Alcol',     v:`${s.drink} / ${state.limits.drink}`});
  if (overBet)   labels.push({t:'Gioco',     v:`${s.bet} € / ${state.limits.bet} €`});

  return (
    <div className="screen-body screen-enter" style={{background:'#6B2A20', color:'var(--paper)'}}>
      <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, #8C3A2E 0%, #4A1810 100%)'}}/>
      <div style={{position:'relative', zIndex:1, flex:1, display:'flex', flexDirection:'column', padding:'60px 32px 32px'}}>
        <div style={{fontFamily:'JetBrains Mono', fontSize:10, letterSpacing:'0.25em', opacity:0.6}}>RAPPORTO NEGATIVO · 21.04</div>
        <div className="serif" style={{fontSize:64, lineHeight:0.95, marginTop:14, color:'#F5D9BF'}}>
          Hai<br/>ceduto.
        </div>
        <div className="serif-it" style={{fontSize:22, marginTop:18, opacity:0.9, lineHeight:1.35}}>
          Bastava poco.<br/>Il limite era lì.
        </div>

        <div style={{marginTop:30, display:'flex', flexDirection:'column', gap:8}}>
          {labels.map((l, i) => (
            <div key={i} style={{
              display:'flex', justifyContent:'space-between', padding:'12px 16px',
              background:'rgba(0,0,0,0.25)', borderRadius: 12,
              border: '1px solid rgba(245,217,191,0.15)',
            }}>
              <span style={{fontSize:14, fontWeight:600}}>{l.t}</span>
              <span className="mono" style={{fontSize:14, color:'#F5D9BF'}}>{l.v}</span>
            </div>
          ))}
        </div>

        <div style={{flex:1}}/>

        <div style={{background:'rgba(0,0,0,0.25)', borderRadius:14, padding:16, marginBottom:14}}>
          <div className="kicker" style={{color:'rgba(245,217,191,0.6)'}}>STREAK AZZERATA</div>
          <div style={{display:'flex', alignItems:'baseline', gap:10, marginTop:4}}>
            <span className="serif" style={{fontSize:28, textDecoration:'line-through', opacity:0.5}}>12</span>
            <span style={{fontSize:22}}>→</span>
            <span className="serif" style={{fontSize:44, color:'#F5D9BF'}}>0</span>
          </div>
        </div>

        <button onClick={() => go('home')} className="btn" style={{background:'#F5D9BF', color:'#4A1810', fontFamily:'Instrument Serif, serif', fontSize:17, padding:'16px'}}>
          Domani si ricomincia.
        </button>
      </div>
    </div>
  );
}

// ── SAVINGS DETAIL ──
function AccountCard({ account, onDeposit }) {
  const initial = (account.name || '?').charAt(0).toUpperCase();
  const lastDep = account.deposits && account.deposits[0];
  const lastDepText = lastDep
    ? `ult. versamento ${new Date(lastDep.date).toLocaleDateString('it-IT', {day:'numeric', month:'short'})} · +${lastDep.amt} €`
    : 'nessun versamento ancora';
  return (
    <div style={{background:'#fff', border:'1px solid var(--paper-edge)', borderRadius:18, padding:18, display:'flex', alignItems:'center', gap:14, marginBottom:8}}>
      <div style={{width:44, height:44, borderRadius:12, background:'var(--ink)', color:'var(--paper)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Instrument Serif', fontWeight:400, fontSize:22}}>{initial}</div>
      <div style={{flex:1, minWidth:0}}>
        <div style={{fontSize:15, fontWeight:600}}>{account.name}</div>
        <div style={{fontSize:12, color:'var(--ink-mute)', marginTop:2}}>{lastDepText}</div>
      </div>
      <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6}}>
        <div className="serif" style={{fontSize:22}}>€ {(account.balance || 0).toLocaleString('it')}</div>
        <button onClick={onDeposit} style={{fontSize:11, fontWeight:600, color:'var(--pac)', background:'var(--pac-bg)', border:'none', borderRadius:8, padding:'4px 10px', cursor:'pointer', fontFamily:'Inter'}}>+ versamento</button>
      </div>
    </div>
  );
}

function AddAccountModal({ onCancel, onSave }) {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const valid = name.trim().length >= 1 && !isNaN(parseFloat(balance)) && parseFloat(balance) >= 0;
  return (
    <div onClick={onCancel} style={{position:'fixed', inset:0, background:'rgba(20,16,10,0.55)', display:'flex', alignItems:'flex-end', justifyContent:'center', zIndex:200}}>
      <div onClick={e => e.stopPropagation()} style={{width:'100%', maxWidth:420, background:'var(--paper)', borderRadius:'24px 24px 0 0', padding:'22px 22px 30px'}}>
        <div style={{width:36, height:4, background:'var(--paper-edge)', borderRadius:4, margin:'0 auto 16px'}}/>
        <div className="serif" style={{fontSize:22}}>Nuovo conto</div>
        <div style={{marginTop:16, display:'flex', flexDirection:'column', gap:10}}>
          <div style={{padding:'12px 14px', background:'#fff', border:'1px solid var(--paper-edge)', borderRadius:12}}>
            <input autoFocus type="text" placeholder="Nome conto (es. Mediolanum)" value={name} onChange={e => setName(e.target.value)}
              style={{width:'100%', fontSize:16, fontFamily:'inherit', border:'none', outline:'none', background:'transparent', color:'var(--ink)'}}/>
          </div>
          <div style={{display:'flex', alignItems:'baseline', gap:8, padding:'12px 14px', background:'#fff', border:'1px solid var(--paper-edge)', borderRadius:12}}>
            <input type="number" inputMode="decimal" placeholder="Saldo attuale" value={balance} onChange={e => setBalance(e.target.value)}
              style={{flex:1, fontSize:22, fontFamily:'Instrument Serif', border:'none', outline:'none', background:'transparent', color:'var(--ink)'}}/>
            <span style={{fontSize:14, color:'var(--ink-mute)'}}>€</span>
          </div>
        </div>
        <div style={{display:'flex', gap:10, marginTop:18}}>
          <button onClick={onCancel} style={{flex:1, padding:'14px', background:'transparent', border:'1px solid var(--paper-edge)', borderRadius:14, fontFamily:'inherit', fontSize:14, color:'var(--ink)', cursor:'pointer'}}>annulla</button>
          <button onClick={() => valid && onSave(name.trim(), parseFloat(balance))} style={{flex:2, padding:'14px', background: valid ? 'var(--ink)' : 'var(--paper-edge)', border:'none', borderRadius:14, fontFamily:'inherit', fontSize:14, color: valid ? 'var(--paper)' : 'var(--ink-mute)', fontWeight:600, cursor: valid ? 'pointer' : 'default'}}>aggiungi</button>
        </div>
      </div>
    </div>
  );
}

function Savings({ go, state, setState }) {
  const [deposit, setDeposit] = useState(false);
  const [extraAccounts, setExtraAccounts] = useState(() => {
    try { return JSON.parse(localStorage.getItem('extra-accounts') || '[]'); } catch { return []; }
  });
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [depositAccount, setDepositAccount] = useState(null); // account id

  const extraTotal = extraAccounts.reduce((s, a) => s + (a.balance || 0), 0);
  const total = state.pacTotal + state.revolut + extraTotal;

  const saveDeposit = (raw) => {
    const n = parseFloat(raw);
    if (isNaN(n) || n <= 0) { setDeposit(false); return; }
    const next = (state.revolut || 0) + n;
    try { localStorage.setItem('revolut', String(next)); } catch {}
    try {
      const log = JSON.parse(localStorage.getItem('revolut-log') || '[]');
      log.unshift({ amt: n, date: new Date().toISOString() });
      localStorage.setItem('revolut-log', JSON.stringify(log.slice(0, 30)));
    } catch {}
    setState(s => ({ ...s, revolut: next }));
    setDeposit(false);
  };

  const saveExtraDeposit = (raw) => {
    const n = parseFloat(raw);
    if (isNaN(n) || n <= 0) { setDepositAccount(null); return; }
    const updated = extraAccounts.map(a => {
      if (a.id !== depositAccount) return a;
      const deps = [{ amt: n, date: new Date().toISOString() }, ...(a.deposits || [])].slice(0, 30);
      return { ...a, balance: (a.balance || 0) + n, deposits: deps };
    });
    setExtraAccounts(updated);
    try { localStorage.setItem('extra-accounts', JSON.stringify(updated)); } catch {}
    setDepositAccount(null);
  };

  const addAccount = (name, balance) => {
    const newAcc = { id: Date.now(), name, balance, deposits: [] };
    const updated = [...extraAccounts, newAcc];
    setExtraAccounts(updated);
    try { localStorage.setItem('extra-accounts', JSON.stringify(updated)); } catch {}
    setShowAddAccount(false);
  };

  let lastDep = null;
  try {
    const log = JSON.parse(localStorage.getItem('revolut-log') || '[]');
    if (log.length) lastDep = log[0];
  } catch {}
  const lastDepText = lastDep
    ? `ult. versamento ${new Date(lastDep.date).toLocaleDateString('it-IT', {day:'numeric', month:'short'})} · +${lastDep.amt} €`
    : 'nessun versamento ancora';

  const monthNames = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
  const now = new Date();
  const currentMonthLabel = monthNames[now.getMonth()].toUpperCase();
  const nextMonthLabel = monthNames[(now.getMonth() + 1) % 12].toUpperCase();

  return (
    <div className="screen-body screen-enter">
      <TopBar go={go} back="home" title="Risparmi"/>
      <div className="screen-scroll" style={{padding:'0 24px 24px'}}>
        <div style={{padding:'24px 0 20px'}}>
          <div className="kicker">TOTALE DA PARTE</div>
          <div className="serif" style={{fontSize:64, lineHeight:1, marginTop:4}}>
            € {total.toLocaleString('it')}
          </div>
          <div className="serif-it" style={{fontSize:17, color:'var(--ink-mute)', marginTop:6}}>
            crescono di <b style={{fontStyle:'normal'}}>200 €</b> ogni mese.
          </div>
        </div>

        {/* PAC */}
        <div style={{background:'var(--pac-bg)', borderRadius:20, padding:18, marginBottom:12}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <div className="kicker" style={{color:'var(--pac)'}}>PAC · 200 €/MESE</div>
              <div className="serif" style={{fontSize:34, marginTop:2, lineHeight:1}}>€ {state.pacTotal.toLocaleString('it')}</div>
            </div>
            <div className="chip" style={{background: state.pacThisMonth ? 'var(--pac)' : 'var(--paper-edge)', color: state.pacThisMonth ? 'var(--paper)' : 'var(--ink-mute)'}}>
              {state.pacThisMonth ? <><I.Check s={11}/> {currentMonthLabel}</> : <>{currentMonthLabel} · ?</>}
            </div>
          </div>
          <PacChart/>
          <div style={{display:'flex', justifyContent:'space-between', marginTop:2}}>
            <span className="mono" style={{fontSize:10, color:'var(--ink-mute)'}}>INIZIO</span>
            <span className="mono" style={{fontSize:10, color:'var(--ink-mute)'}}>PROSSIMO · 1 {nextMonthLabel}</span>
          </div>
        </div>

        {/* Wallet */}
        <div className="label-tiny" style={{marginTop:16, marginBottom:8, paddingLeft:4}}>ALTRI CONTI</div>
        <div style={{background:'#fff', border:'1px solid var(--paper-edge)', borderRadius:18, padding:18, display:'flex', alignItems:'center', gap:14, marginBottom:8}}>
          <div style={{width:44, height:44, borderRadius:12, background:'#1A1814', color:'#FBF7EB', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Instrument Serif', fontWeight:400, fontSize:24}}>R</div>
          <div style={{flex:1}}>
            <div style={{fontSize:15, fontWeight:600}}>Revolut</div>
            <div style={{fontSize:12, color:'var(--ink-mute)', marginTop:2}}>{lastDepText}</div>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6}}>
            <div className="serif" style={{fontSize:22}}>€ {state.revolut}</div>
            <button onClick={() => setDeposit(true)} style={{fontSize:11, fontWeight:600, color:'var(--pac)', background:'var(--pac-bg)', border:'none', borderRadius:8, padding:'4px 10px', cursor:'pointer', fontFamily:'Inter'}}>+ versamento</button>
          </div>
        </div>

        {extraAccounts.map(acc => (
          <AccountCard key={acc.id} account={acc} onDeposit={() => setDepositAccount(acc.id)}/>
        ))}

        <button onClick={() => setShowAddAccount(true)} style={{
          width:'100%', marginTop:4, padding:'14px 16px',
          background:'transparent', color:'var(--ink-mute)',
          border:'1.5px dashed var(--paper-edge)', borderRadius:18,
          display:'flex', alignItems:'center', justifyContent:'center', gap:8,
          fontSize:14, fontWeight:500, fontFamily:'Inter', cursor:'pointer',
        }}>
          <I.Plus s={16}/> aggiungi un altro conto
        </button>

        {deposit && <EditModal editing={{label:'Versamento Revolut', value:'', suffix:'€ (da aggiungere)'}} onCancel={() => setDeposit(false)} onSave={saveDeposit}/>}
        {depositAccount && <EditModal editing={{label:`Versamento ${extraAccounts.find(a=>a.id===depositAccount)?.name||''}`, value:'', suffix:'€ (da aggiungere)'}} onCancel={() => setDepositAccount(null)} onSave={saveExtraDeposit}/>}
        {showAddAccount && <AddAccountModal onCancel={() => setShowAddAccount(false)} onSave={addAccount}/>}
      </div>
      <TabBar go={go} active="savings"/>
    </div>
  );
}

function PacChart() {
  return (
    <svg viewBox="0 0 300 100" style={{width:'100%', height:80, marginTop:12}}>
      <defs>
        <linearGradient id="pacGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3E6B4E" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#3E6B4E" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M0 92 L 30 86 L 60 76 L 90 64 L 120 54 L 150 44 L 180 34 L 210 24 L 240 14 L 270 8 L 300 4 L 300 100 L 0 100 Z"
        fill="url(#pacGrad)"/>
      <path d="M0 92 L 30 86 L 60 76 L 90 64 L 120 54 L 150 44 L 180 34 L 210 24 L 240 14 L 270 8 L 300 4"
        fill="none" stroke="#3E6B4E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="300" cy="4" r="4" fill="#3E6B4E"/>
    </svg>
  );
}

// ── STATS helpers ──
function MonthSummary({ monthKey, entries, limits }) {
  const monthNames = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
  const [y, m] = monthKey.split('-');
  const label = `${monthNames[parseInt(m,10)-1].toUpperCase()} ${y}`;
  const daysInMonth = new Date(parseInt(y), parseInt(m), 0).getDate();
  const totalSmoke = entries.reduce((s,e) => s + (e.smoke||0), 0);
  const totalDrink = entries.reduce((s,e) => s + (e.drink||0), 0);
  const totalBet   = entries.reduce((s,e) => s + (e.bet||0), 0);
  const pacDone    = entries.some(e => e.pac === true);
  const avgSmoke   = entries.length ? (totalSmoke / entries.length).toFixed(1) : '—';

  return (
    <div style={{background:'var(--paper-2)', borderRadius:18, padding:18, marginBottom:12}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
        <div className="kicker">{label}</div>
        {pacDone && <div className="chip" style={{background:'var(--pac)', color:'var(--paper)', fontSize:10}}><I.Check s={10}/> PAC</div>}
      </div>
      <div style={{fontSize:13, color:'var(--ink-3)', marginTop:10, display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px 16px'}}>
        <div><span style={{color:'var(--ink-mute)'}}>Giorni</span> <b>{entries.length}/{daysInMonth}</b></div>
        <div><span style={{color:'var(--ink-mute)'}}>Fumate</span> <b style={{color: totalSmoke > limits.smoke * entries.length ? 'var(--smoke)' : 'inherit'}}>{totalSmoke}</b> <span style={{fontSize:11, color:'var(--ink-faint)'}}>({avgSmoke}/g)</span></div>
        <div><span style={{color:'var(--ink-mute)'}}>Alcol</span> <b style={{color: totalDrink > limits.drink * 4 ? 'var(--drink)' : 'inherit'}}>{totalDrink} u.</b></div>
        <div><span style={{color:'var(--ink-mute)'}}>Gioco</span> <b style={{color: totalBet > limits.bet ? 'var(--bet)' : 'inherit'}}>{limits.bet===0 && totalBet===0 ? '✓ zero' : `${totalBet}€`}</b></div>
      </div>
    </div>
  );
}

function DayRow({ entry, limits, isLast }) {
  const dayNames = ['dom','lun','mar','mer','gio','ven','sab'];
  const d = new Date(entry.date + 'T12:00:00');
  const dayLabel = `${d.getDate()} ${['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'][d.getMonth()]}`;
  const dow = dayNames[d.getDay()];
  const smokeOver = (entry.smoke||0) > limits.smoke;
  const drinkOver = (entry.drink||0) > limits.drink;
  const betOver   = (entry.bet||0) > limits.bet;
  const allOk = !smokeOver && !drinkOver && !betOver;

  return (
    <div style={{display:'flex', alignItems:'center', gap:12, padding:'12px 0', borderBottom: isLast ? 'none' : '1px solid var(--paper-edge)'}}>
      <div style={{width:36, textAlign:'center', flexShrink:0}}>
        <div style={{fontSize:10, color:'var(--ink-faint)', fontFamily:'JetBrains Mono', textTransform:'uppercase'}}>{dow}</div>
        <div style={{fontSize:17, fontWeight:600, lineHeight:1.1}}>{d.getDate()}</div>
      </div>
      <div style={{flex:1, display:'flex', gap:8, flexWrap:'wrap', alignItems:'center'}}>
        <span style={{fontSize:12, color: smokeOver ? 'var(--smoke)' : 'var(--ink-3)', fontWeight: smokeOver ? 600 : 400}}>🚬 {entry.smoke||0}</span>
        <span style={{fontSize:12, color: drinkOver ? 'var(--drink)' : 'var(--ink-3)', fontWeight: drinkOver ? 600 : 400}}>🍷 {entry.drink||0}</span>
        <span style={{fontSize:12, color: betOver ? 'var(--bet)' : 'var(--ink-3)', fontWeight: betOver ? 600 : 400}}>🎲 {entry.bet||0}€</span>
        {entry.pac && <span style={{fontSize:11, color:'var(--pac)', fontWeight:600}}>PAC ✓</span>}
      </div>
      <div style={{fontSize:11, color: allOk ? 'var(--pac)' : 'var(--smoke)', fontWeight:600, textAlign:'right', minWidth:52}}>
        {allOk ? 'in linea' : [smokeOver&&'fumo', drinkOver&&'alcol', betOver&&'gioco'].filter(Boolean).join(' ')}
      </div>
    </div>
  );
}

// ── STATS ──
function Stats({ go, state }) {
  const entries = (() => {
    try { return JSON.parse(localStorage.getItem('entries') || '[]'); } catch { return []; }
  })();

  const limits = state.limits || { smoke: 5, drink: 3, bet: 0 };

  // Group by month descending
  const byMonth = {};
  entries.forEach(e => {
    const mk = e.date.slice(0, 7);
    (byMonth[mk] = byMonth[mk] || []).push(e);
  });
  const months = Object.keys(byMonth).sort().reverse();

  const empty = entries.length === 0;

  return (
    <div className="screen-body screen-enter">
      <TopBar go={go} back="home" title="Storia"/>
      <div className="screen-scroll" style={{padding:'8px 24px 24px'}}>
        {empty ? (
          <div style={{padding:'40px 8px', textAlign:'center'}}>
            <div className="serif" style={{fontSize:28, lineHeight:1.2}}>Nessun rapporto<br/>ancora.</div>
            <div className="serif-it" style={{fontSize:16, color:'var(--ink-mute)', marginTop:14, lineHeight:1.5}}>
              La storia si scrive una sera alla volta. Fai il primo check-in stasera.
            </div>
            <button onClick={() => go('checkin-intro')} className="btn btn-primary" style={{marginTop:24, padding:'12px 22px', fontFamily:'Instrument Serif', fontSize:16}}>apri il diario →</button>
          </div>
        ) : (
          <>
            {/* Riepilogo mensile */}
            <div className="kicker" style={{marginTop:10, marginBottom:10}}>RIEPILOGO MENSILE</div>
            {months.map(mk => (
              <MonthSummary key={mk} monthKey={mk} entries={byMonth[mk]} limits={limits}/>
            ))}

            {/* Giornaliero */}
            <div className="kicker" style={{marginTop:20, marginBottom:4}}>GIORNALIERO</div>
            <div style={{background:'var(--paper)', border:'1px solid var(--paper-edge)', borderRadius:18, padding:'0 16px'}}>
              {entries.slice().sort((a,b) => b.date.localeCompare(a.date)).map((entry, i, arr) => (
                <DayRow key={entry.date} entry={entry} limits={limits} isLast={i === arr.length - 1}/>
              ))}
            </div>
          </>
        )}
      </div>
      <TabBar go={go} active="stats"/>
    </div>
  );
}

// ── SETTINGS (Il patto) ──
function Settings({ go, state, setState }) {
  const [edit, setEdit] = useState(null); // {kind, label, value, suffix}
  const [confirmReset, setConfirmReset] = useState(false);
  const [notifs, setNotifs] = useState(() => {
    try { return JSON.parse(localStorage.getItem('notif-state') || 'null') || { evening: true, pac: true, faceid: true }; }
    catch { return { evening: true, pac: true, faceid: true }; }
  });
  const [tone, setToneState] = useState(() => {
    try { return localStorage.getItem('tone') || 'coach militare'; }
    catch { return 'coach militare'; }
  });
  const toggleNotif = (key) => setNotifs(prev => {
    const next = { ...prev, [key]: !prev[key] };
    try { localStorage.setItem('notif-state', JSON.stringify(next)); } catch {}
    return next;
  });
  const setTone = (t) => {
    setToneState(t);
    try { localStorage.setItem('tone', t); } catch {}
  };
  const toneDesc = { gentile: 'Supportivo e incoraggiante.', neutra: 'Tono neutro, solo i fatti.', 'coach militare': 'Se sgarri, te lo ricordo.', spietata: 'Nessuna pietà. Zero giustificazioni.' };

  const openEdit = (kind, label, value, suffix='') => setEdit({ kind, label, value: String(value), suffix });

  const saveEdit = (raw) => {
    const num = parseFloat(raw);
    if (isNaN(num) || num < 0) { setEdit(null); return; }
    const k = edit.kind;
    if (k === 'pacTotal') {
      try { localStorage.setItem('pac-total', String(num)); } catch {}
      setState(s => ({ ...s, pacTotal: num }));
    } else if (k === 'revolut') {
      try { localStorage.setItem('revolut', String(num)); } catch {}
      setState(s => ({ ...s, revolut: num }));
    } else if (k === 'smoke' || k === 'drink' || k === 'bet') {
      const newLimits = { ...state.limits, [k]: Math.round(num) };
      try { localStorage.setItem('limits', JSON.stringify(newLimits)); } catch {}
      setState(s => ({ ...s, limits: newLimits }));
    }
    setEdit(null);
  };

  const reset = () => {
    try {
      ['user-name','pac-total','revolut','limits','app-state','hifi-c-onboarded','hifi-c-screen'].forEach(k => localStorage.removeItem(k));
    } catch {}
    location.reload();
  };
  return (
    <div className="screen-body screen-enter">
      <TopBar go={go} back="home" title="Il patto"/>
      <div className="screen-scroll" style={{padding:'4px 24px 24px'}}>
        <div style={{padding:'8px 0 12px'}}>
          <div className="serif-it" style={{fontSize:18, color:'var(--ink-3)', lineHeight:1.4}}>
            Firmato con te stesso.<br/>Non ci sono scuse.
          </div>
        </div>

        <div className="label-tiny" style={{marginTop:14, marginBottom:8}}>I MIEI RISPARMI</div>
        <Card>
          <SettingRow label="PAC mensile" val="€ 200 fissi" dot="var(--pac)"/>
          <SettingRow label="Totale PAC accumulato" val={`€ ${state.pacTotal.toLocaleString('it')}`} dot="var(--pac)" onClick={() => openEdit('pacTotal', 'Totale PAC accumulato', state.pacTotal, '€')}/>
          <SettingRow label="Revolut" val={`€ ${state.revolut}`} dot="var(--pac)" last onClick={() => openEdit('revolut', 'Saldo Revolut', state.revolut, '€')}/>
        </Card>
        <AddRow label="aggiungi un altro conto"/>

        <div className="label-tiny" style={{marginTop:20, marginBottom:8}}>I MIEI LIMITI</div>
        <Card>
          <SettingRow label="Fumo al massimo" val={`${state.limits.smoke} al giorno`} dot="var(--smoke)" onClick={() => openEdit('smoke','Sigarette al giorno', state.limits.smoke, '/giorno')}/>
          <SettingRow label="Bevo al massimo" val={`${state.limits.drink} unità a settimana`} dot="var(--drink)" onClick={() => openEdit('drink','Unità alcol a settimana', state.limits.drink, '/sett')}/>
          <SettingRow label="Gioco d'azzardo" val={state.limits.bet === 0 ? 'mai.' : `${state.limits.bet} € / mese`} dot="var(--bet)" last onClick={() => openEdit('bet','Gioco € al mese', state.limits.bet, '€/mese')}/>
        </Card>

        <div className="label-tiny" style={{marginTop:20, marginBottom:8}}>COME TI PARLO</div>
        <Card>
          <div style={{padding:'14px 16px'}}>
            <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
              {['gentile', 'neutra', 'coach militare', 'spietata'].map((t) => (
                <div key={t} onClick={() => setTone(t)} style={{
                  padding:'6px 12px', borderRadius:999, fontSize:12, fontWeight:600, cursor:'pointer',
                  background: t === tone ? 'var(--ink)' : 'var(--paper-2)',
                  color: t === tone ? 'var(--paper)' : 'var(--ink)',
                }}>{t}</div>
              ))}
            </div>
            <div className="serif-it" style={{fontSize:14, color:'var(--ink-mute)', marginTop:10, lineHeight:1.4}}>
              Attivo: {tone}. {toneDesc[tone]}
            </div>
          </div>
        </Card>

        <div className="label-tiny" style={{marginTop:20, marginBottom:8}}>NOTIFICHE</div>
        <Card>
          <ToggleRow label="Rapporto serale" val="21:30" on={notifs.evening} onClick={() => toggleNotif('evening')}/>
          <ToggleRow label="Promemoria PAC" val="1° del mese" on={notifs.pac} onClick={() => toggleNotif('pac')}/>
          <ToggleRow label="Face ID" val="all'apertura" on={notifs.faceid} onClick={() => toggleNotif('faceid')} last/>
        </Card>

        <div style={{marginTop:24}}>
          <button onClick={() => setConfirmReset(true)} style={{width:'100%', padding:'12px', background:'transparent', border:'1px solid var(--paper-edge)', borderRadius:12, color:'var(--smoke)', fontFamily:'inherit', fontSize:13, cursor:'pointer'}}>
            resetta tutti i dati
          </button>
        </div>

        {edit && <EditModal editing={edit} onCancel={() => setEdit(null)} onSave={saveEdit}/>}
        {confirmReset && <ConfirmModal title="Cancellare tutto?" body="Perderai tutti i tuoi dati e ricomincerai dall'onboarding." confirmLabel="resetta" onCancel={() => setConfirmReset(false)} onConfirm={reset}/>}

        <div className="label-tiny" style={{marginTop:20, marginBottom:8}}>WIDGET HOME iOS</div>
        <Card>
          <div onClick={() => go('widget')} style={{padding:'14px 16px', display:'flex', alignItems:'center', gap:12, cursor:'pointer'}}>
            <div style={{width:44, height:44, borderRadius:10, background:'var(--ink)', color:'var(--paper)', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <I.Flame s={20} c="#C8A66B"/>
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:14, fontWeight:600}}>Aggiungi il widget</div>
              <div style={{fontSize:12, color:'var(--ink-mute)'}}>vedi anteprima ›</div>
            </div>
            <I.Chev s={14} c="var(--ink-mute)"/>
          </div>
        </Card>
      </div>
      <TabBar go={go} active="settings"/>
    </div>
  );
}

function Card({ children }) {
  return <div style={{background:'#fff', border:'1px solid var(--paper-edge)', borderRadius:16, overflow:'hidden'}}>{children}</div>;
}
function EditModal({ editing, onCancel, onSave }) {
  const [val, setVal] = useState(String(editing.value ?? editing.current ?? ''));
  const inputRef = React.useRef(null);
  React.useEffect(() => { setTimeout(() => inputRef.current && inputRef.current.focus(), 80); }, []);
  const submit = () => {
    const num = editing.integer ? parseInt(val, 10) : parseFloat(val);
    if (isNaN(num) || num < 0) return;
    onSave(num);
  };
  return (
    <div onClick={onCancel} style={{position:'fixed', inset:0, background:'rgba(20,16,10,0.55)', display:'flex', alignItems:'flex-end', justifyContent:'center', zIndex:200, animation:'fadeIn 0.18s ease'}}>
      <div onClick={e => e.stopPropagation()} style={{width:'100%', maxWidth:420, background:'var(--paper)', borderRadius:'24px 24px 0 0', padding:'22px 22px 30px', animation:'slideUp 0.22s ease'}}>
        <div style={{width:36, height:4, background:'var(--paper-edge)', borderRadius:4, margin:'0 auto 16px'}}/>
        <div className="serif" style={{fontSize:24, lineHeight:1.2}}>{editing.label}</div>
        <div style={{display:'flex', alignItems:'baseline', gap:8, marginTop:18, padding:'14px 16px', background:'#fff', border:'1px solid var(--paper-edge)', borderRadius:14}}>
          <input ref={inputRef} type="number" inputMode={editing.integer ? 'numeric' : 'decimal'} value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} style={{flex:1, fontSize:28, fontFamily:'Instrument Serif', border:'none', outline:'none', background:'transparent', minWidth:0, color:'var(--ink)'}}/>
          {editing.suffix && <span style={{fontSize:14, color:'var(--ink-mute)'}}>{editing.suffix}</span>}
        </div>
        <div style={{display:'flex', gap:10, marginTop:18}}>
          <button onClick={onCancel} style={{flex:1, padding:'14px', background:'transparent', border:'1px solid var(--paper-edge)', borderRadius:14, fontFamily:'inherit', fontSize:14, color:'var(--ink)', cursor:'pointer'}}>annulla</button>
          <button onClick={submit} style={{flex:2, padding:'14px', background:'var(--ink)', border:'none', borderRadius:14, fontFamily:'inherit', fontSize:14, color:'var(--paper)', fontWeight:600, cursor:'pointer'}}>salva</button>
        </div>
      </div>
    </div>
  );
}

function ConfirmModal({ title, body, confirmLabel, onCancel, onConfirm }) {
  return (
    <div onClick={onCancel} style={{position:'fixed', inset:0, background:'rgba(20,16,10,0.55)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:200, padding:24, animation:'fadeIn 0.18s ease'}}>
      <div onClick={e => e.stopPropagation()} style={{width:'100%', maxWidth:340, background:'var(--paper)', borderRadius:20, padding:24, animation:'slideUp 0.22s ease'}}>
        <div className="serif" style={{fontSize:22, lineHeight:1.2}}>{title}</div>
        <div style={{fontSize:13, color:'var(--ink-mute)', marginTop:8, lineHeight:1.45}}>{body}</div>
        <div style={{display:'flex', gap:10, marginTop:18}}>
          <button onClick={onCancel} style={{flex:1, padding:'12px', background:'transparent', border:'1px solid var(--paper-edge)', borderRadius:12, fontFamily:'inherit', fontSize:14, color:'var(--ink)', cursor:'pointer'}}>annulla</button>
          <button onClick={onConfirm} style={{flex:1, padding:'12px', background:'var(--smoke)', border:'none', borderRadius:12, fontFamily:'inherit', fontSize:14, color:'#fff', fontWeight:600, cursor:'pointer'}}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}

function SettingRow({ label, val, dot, last, onClick }) {
  return (
    <div onClick={onClick} style={{display:'flex', alignItems:'center', padding:'12px 16px', borderBottom: last ? 'none' : '1px solid var(--paper-edge)', gap:10, cursor: onClick ? 'pointer' : 'default'}}>
      {dot && <div style={{width:8, height:8, borderRadius:8, background:dot}}/>}
      <div style={{fontSize:14, fontWeight:500, flex:1}}>{label}</div>
      <div style={{fontSize:14, color:'var(--ink-mute)'}}>{val}</div>
      {onClick && <I.Pencil s={14} c="var(--ink-faint)"/>}
    </div>
  );
}
function ToggleRow({ label, val, on, last, onClick }) {
  return (
    <div onClick={onClick} style={{display:'flex', alignItems:'center', padding:'12px 16px', borderBottom: last ? 'none' : '1px solid var(--paper-edge)', gap:10, cursor: onClick ? 'pointer' : 'default'}}>
      <div style={{fontSize:14, fontWeight:500, flex:1}}>{label}</div>
      {val && <div style={{fontSize:13, color:'var(--ink-mute)'}}>{val}</div>}
      <div style={{width:42, height:26, borderRadius:26, background: on ? 'var(--pac)' : 'var(--paper-edge)', position:'relative', transition:'background 0.2s'}}>
        <div style={{position:'absolute', top:2, left: on ? 18 : 2, width:22, height:22, borderRadius:22, background:'#fff', boxShadow:'0 1px 3px rgba(0,0,0,0.2)', transition:'left 0.2s'}}/>
      </div>
    </div>
  );
}
function AddRow({ label }) {
  return (
    <button style={{
      width:'100%', marginTop:8, padding:'11px 16px',
      background:'transparent', color:'var(--ink-mute)',
      border:'1.5px dashed var(--paper-edge)', borderRadius:14,
      display:'flex', alignItems:'center', justifyContent:'center', gap:6,
      fontSize:13, fontFamily:'Inter', cursor:'pointer',
    }}>
      <I.Plus s={14}/> {label}
    </button>
  );
}

function TopBar({ go, back, title, right }) {
  return (
    <div style={{padding:'14px 16px 10px', display:'flex', alignItems:'center', justifyContent:'space-between', background:'var(--paper)'}}>
      <button onClick={() => go(back)} style={{...iconBtn, background:'var(--paper-2)'}}><I.Back s={18}/></button>
      <div style={{fontFamily:'Instrument Serif', fontSize:20, fontWeight:400}}>{title}</div>
      <div style={{width:36}}>{right}</div>
    </div>
  );
}

function TabBar({ go, active }) {
  const items = [
    {k:'home', L:'Oggi', I: I.Home},
    {k:'savings', L:'Risparmi', I: I.Coin},
    {k:'stats', L:'Storia', I: I.Chart},
    {k:'settings', L:'Patto', I: I.Cog},
  ];
  return (
    <div className="tabbar">
      {items.map(it => (
        <div key={it.k} onClick={() => go(it.k)} className={`tabbar-item ${it.k === active ? 'active' : ''}`}>
          <it.I s={22}/>{it.L}
        </div>
      ))}
    </div>
  );
}

// ── LIMIT ROW (stepper) ──
function LimitRow({ label, value, min=0, max=20, step=1, set, suffix }) {
  const dec = () => set(Math.max(min, value - step));
  const inc = () => set(Math.min(max, value + step));
  return (
    <div style={{display:'flex', alignItems:'center', gap:10, background:'#fff', border:'1px solid var(--paper-edge)', borderRadius:12, padding:'8px 10px'}}>
      <div style={{flex:1, fontSize:13}}>{label}</div>
      <button type="button" onClick={dec} style={{width:30, height:30, borderRadius:8, border:'1px solid var(--paper-edge)', background:'var(--paper-2)', fontSize:18, fontFamily:'inherit', cursor:'pointer'}}>−</button>
      <div className="serif" style={{minWidth:50, textAlign:'center', fontSize:22}}>
        {value === 0 && suffix === '€' ? 'mai' : `${value}${suffix}`}
      </div>
      <button type="button" onClick={inc} style={{width:30, height:30, borderRadius:8, border:'1px solid var(--paper-edge)', background:'var(--paper-2)', fontSize:18, fontFamily:'inherit', cursor:'pointer'}}>+</button>
    </div>
  );
}

// ── ONBOARDING ──
function Onboarding({ go, setState }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [pac, setPac] = useState('');
  const [revolut, setRevolut] = useState('');
  const [limits, setLimits] = useState({ smoke: 5, drink: 3, bet: 0 });

  // step structure: each step is either a bot message, or an input prompt
  // After user submits an input, we advance. After last step, save & go home.
  const steps = [
    { type:'bot', text:'Ciao. Sono il tuo coach.\nNon sono qui per consolarti.' },
    { type:'bot', text:'Come ti chiami?' },
    { type:'input', kind:'name', placeholder:'Il tuo nome', value:name, set:setName, validate:(v)=>v.trim().length >= 2 },
    { type:'bot', text: () => `Piacere, ${name || 'soldato'}. Sarò severo.` },
    { type:'bot', text:'Quanto hai già nel PAC?\nIl PAC è 200 €/mese fissi.' },
    { type:'input', kind:'pac', placeholder:'es. 3420', suffix:'€', value:pac, set:setPac, validate:(v)=>!isNaN(parseFloat(v)) && parseFloat(v) >= 0, type2:'number' },
    { type:'bot', text:'Hai altri soldi da parte\nsu Revolut?' },
    { type:'input', kind:'revolut', placeholder:'es. 850', suffix:'€', value:revolut, set:setRevolut, validate:(v)=>!isNaN(parseFloat(v)) && parseFloat(v) >= 0, type2:'number', skipLabel:'non ho Revolut' },
    { type:'bot', text: () => {
      const total = (parseFloat(pac)||0) + (parseFloat(revolut)||0);
      return `${total.toLocaleString('it-IT')} €. Base di partenza.`;
    }},
    { type:'bot', text:'Ora i tuoi limiti.\nNon trattare con te stesso.' },
    { type:'limits', value:limits, set:setLimits },
    { type:'bot', text: () => `${name || 'Soldato'}, il patto è chiaro.\nOgni sera ci vediamo alle 21:30.` },
  ];

  // build visible chat: every bot message up to current step + user echoes
  const visible = [];
  for (let i = 0; i <= Math.min(step, steps.length - 1); i++) {
    const s = steps[i];
    if (s.type === 'bot') {
      visible.push({ role:'bot', text: typeof s.text === 'function' ? s.text() : s.text });
    } else if (s.type === 'input' && i < step) {
      // already filled — show as user bubble
      const v = s.value;
      if (v) {
        if (s.kind === 'name') visible.push({ role:'user', text: v });
        else if (s.kind === 'pac') visible.push({ role:'user', text:`€ ${parseFloat(v).toLocaleString('it-IT')}`, widget:'pac', amt:v });
        else if (s.kind === 'revolut') visible.push({ role:'user', text:`Revolut · ${parseFloat(v).toLocaleString('it-IT')} €`, widget:'revolut', amt:v });
      } else if (s.kind === 'revolut') {
        visible.push({ role:'user', text:'non ho Revolut' });
      }
    } else if (s.type === 'limits' && i < step) {
      visible.push({ role:'user', text:`fumo ≤${limits.smoke} · alcol ≤${limits.drink}u · gioco ${limits.bet === 0 ? 'mai' : '≤'+limits.bet+'€'}`, widget:'limits' });
    }
  }

  const current = steps[step];
  const isFinal = step >= steps.length - 1;

  const advance = () => setStep(s => Math.min(s + 1, steps.length - 1));

  const finish = () => {
    try {
      localStorage.setItem('user-name', name || 'soldato');
      localStorage.setItem('pac-total', String(parseFloat(pac) || 0));
      localStorage.setItem('revolut', String(parseFloat(revolut) || 0));
      localStorage.setItem('limits', JSON.stringify(limits));
      localStorage.setItem('hifi-c-onboarded', '1');
      // Update in-memory state so Home/Stats/Settings see the new values immediately
      if (typeof setState === 'function') {
        setState(s => ({
          ...s,
          pacTotal: parseFloat(pac) || 0,
          revolut: parseFloat(revolut) || 0,
          limits: { ...limits },
        }));
      }
      // ask notification permission now
      if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().catch(()=>{});
      }
    } catch {}
    go('home');
  };

  return (
    <div className="screen-body screen-enter" style={{background:'var(--paper)'}}>
      <div style={{padding:'20px 24px 8px', display:'flex', alignItems:'center', gap:10}}>
        <div style={{width:36, height:36, borderRadius:999, background:'var(--ink)', color:'var(--paper)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Instrument Serif', fontSize:20}}>C</div>
        <div>
          <div style={{fontSize:14, fontWeight:600}}>Coach</div>
          <div style={{fontSize:11, color:'var(--pac)', display:'flex', alignItems:'center', gap:4}}>
            <div style={{width:6, height:6, borderRadius:6, background:'var(--pac)'}}/> online
          </div>
        </div>
        <div style={{flex:1}}/>
        <div className="mono" style={{fontSize:10, color:'var(--ink-mute)'}}>3/4</div>
      </div>

      <div className="screen-scroll" style={{padding:'16px 20px'}}>
        {visible.map((m, i) => (
          <div key={i} className="fade-up" style={{display:'flex', justifyContent: m.role === 'bot' ? 'flex-start' : 'flex-end', marginBottom: 8}}>
            <div style={{
              maxWidth:'78%',
              padding:'10px 14px',
              background: m.role === 'bot' ? '#fff' : 'var(--ink)',
              color: m.role === 'bot' ? 'var(--ink)' : 'var(--paper)',
              borderRadius: m.role === 'bot' ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
              border: m.role === 'bot' ? '1px solid var(--paper-edge)' : 'none',
              fontSize: 14, whiteSpace:'pre-line', lineHeight: 1.4,
            }}>
              {m.widget === 'pac' && (
                <div style={{display:'flex', alignItems:'baseline', gap:6}}>
                  <I.Coin s={16} c="var(--pac-bg)"/>
                  <span className="serif" style={{fontSize:24}}>€ {parseFloat(m.amt).toLocaleString('it-IT')}</span>
                </div>
              )}
              {m.widget === 'revolut' && (
                <div style={{display:'flex', alignItems:'center', gap:8}}>
                  <div style={{width:22, height:22, borderRadius:5, background:'var(--paper)', color:'var(--ink)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, fontFamily:'Instrument Serif'}}>R</div>
                  <span style={{fontSize:13}}>Revolut</span>
                  <span className="serif" style={{fontSize:20}}>€ {parseFloat(m.amt).toLocaleString('it-IT')}</span>
                </div>
              )}
              {!m.widget && m.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{padding:'12px 20px 16px', borderTop:'1px solid var(--paper-edge)', background:'var(--paper-2)'}}>
        {current && current.type === 'bot' && !isFinal && (
          <button onClick={advance} className="btn btn-primary btn-block" style={{padding:'14px', fontFamily:'Instrument Serif', fontSize:16, fontWeight:400}}>
            continua
          </button>
        )}
        {current && current.type === 'input' && (
          <form onSubmit={(e)=>{ e.preventDefault(); if (current.validate(current.value)) advance(); }}
            style={{display:'flex', gap:8, alignItems:'stretch'}}>
            <div style={{flex:1, display:'flex', alignItems:'center', gap:6, background:'#fff', border:'1px solid var(--paper-edge)', borderRadius:12, padding:'10px 12px'}}>
              <input
                autoFocus
                type={current.type2 || 'text'}
                inputMode={current.type2 === 'number' ? 'decimal' : 'text'}
                placeholder={current.placeholder}
                value={current.value}
                onChange={(e)=>current.set(e.target.value)}
                style={{flex:1, border:'none', outline:'none', background:'transparent', fontSize:16, fontFamily:'inherit', color:'var(--ink)', minWidth:0}}
              />
              {current.suffix && <span className="serif" style={{fontSize:18, color:'var(--ink-mute)'}}>{current.suffix}</span>}
            </div>
            <button type="submit" disabled={!current.validate(current.value)} className="btn btn-primary"
              style={{padding:'0 18px', fontFamily:'Instrument Serif', fontSize:16, opacity: current.validate(current.value) ? 1 : 0.4}}>
              →
            </button>
            {current.skipLabel && (
              <button type="button" onClick={advance} className="btn"
                style={{padding:'0 12px', fontSize:12, background:'transparent', border:'1px solid var(--paper-edge)', color:'var(--ink-mute)'}}>
                {current.skipLabel}
              </button>
            )}
          </form>
        )}
        {current && current.type === 'limits' && (
          <div style={{display:'flex', flexDirection:'column', gap:10}}>
            <LimitRow label="Sigarette / giorno" value={limits.smoke} min={0} max={20}
              set={(v)=>setLimits(l=>({...l, smoke:v}))} suffix=""/>
            <LimitRow label="Alcol / settimana (unità)" value={limits.drink} min={0} max={14}
              set={(v)=>setLimits(l=>({...l, drink:v}))} suffix="u"/>
            <LimitRow label="Gioco d'azzardo / mese" value={limits.bet} min={0} max={500} step={10}
              set={(v)=>setLimits(l=>({...l, bet:v}))} suffix="€"/>
            <button onClick={advance} className="btn btn-primary btn-block" style={{padding:'12px', fontFamily:'Instrument Serif', fontSize:16, marginTop:4}}>
              fissa il patto →
            </button>
          </div>
        )}
        {isFinal && (
          <button onClick={finish} className="btn btn-primary btn-block" style={{padding:'14px', fontFamily:'Instrument Serif', fontSize:16, fontWeight:400}}>
            comincia →
          </button>
        )}
      </div>
    </div>
  );
}

// ── WIDGET PREVIEW ──
function Widget({ go, state }) {
  return (
    <div className="screen-body screen-enter">
      <TopBar go={go} back="settings" title="Widget home"/>
      <div className="screen-scroll" style={{padding:'12px 24px 24px'}}>
        <div className="serif-it" style={{fontSize:16, color:'var(--ink-mute)', lineHeight:1.45}}>
          Aggiungi sulla home di iOS per vedere la tua streak<br/>al mattino. Nessun tap richiesto.
        </div>

        {/* Mini fake iOS home */}
        <div style={{
          marginTop:24,
          background: 'linear-gradient(160deg, #E8D9C0 0%, #CAAD85 100%)',
          borderRadius: 30, padding: 18,
          aspectRatio: '0.85',
          display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10, alignContent:'flex-start',
        }}>
          {/* small widget */}
          <div style={{
            background:'var(--ink)', borderRadius:22, padding:14,
            color:'var(--paper)', aspectRatio:'1',
            display:'flex', flexDirection:'column', justifyContent:'space-between',
          }}>
            <div style={{display:'flex', alignItems:'center', gap:6}}>
              <div style={{width:18, height:18, borderRadius:4, background:'#C8A66B', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <I.Flame s={12} c="var(--ink)"/>
              </div>
              <span className="mono" style={{fontSize:8, letterSpacing:'0.15em', opacity:0.6}}>STREAK</span>
            </div>
            <div>
              <div className="serif" style={{fontSize:52, lineHeight:0.9}}>12</div>
              <div style={{fontSize:10, opacity:0.65, marginTop:4}}>giorni di fila</div>
            </div>
          </div>
          {/* small widget 2 */}
          <div style={{
            background:'var(--pac-bg)', borderRadius:22, padding:14,
            color:'var(--ink)', aspectRatio:'1',
            display:'flex', flexDirection:'column', justifyContent:'space-between',
          }}>
            <div className="mono" style={{fontSize:8, letterSpacing:'0.15em', color:'var(--pac)'}}>RISPARMI</div>
            <div>
              <div className="serif" style={{fontSize:26, lineHeight:1}}>€ 4.270</div>
              <div style={{fontSize:10, color:'var(--ink-mute)', marginTop:2}}>+ 250 questo mese</div>
            </div>
          </div>
          {/* medium widget */}
          <div style={{
            gridColumn:'span 2',
            background:'#FBF7EB', borderRadius:22, padding:16,
          }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
              <span className="mono" style={{fontSize:9, letterSpacing:'0.15em', color:'var(--ink-mute)'}}>DIARIO · 21 APR</span>
              <span className="serif-it" style={{fontSize:12, color:'var(--ink-mute)'}}>in linea</span>
            </div>
            <div style={{display:'flex', gap:10, alignItems:'center'}}>
              <StreakBadge Icon={I.Cig} color="var(--smoke)" bg="var(--smoke-bg)" n="3"/>
              <StreakBadge Icon={I.Glass} color="var(--drink)" bg="var(--drink-bg)" n="0"/>
              <StreakBadge Icon={I.Dice} color="var(--bet)" bg="var(--bet-bg)" n="0"/>
              <div style={{flex:1}}/>
              <div style={{textAlign:'right'}}>
                <div className="serif" style={{fontSize:24, lineHeight:1}}>12</div>
                <div style={{fontSize:9, color:'var(--ink-mute)'}}>giorni</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{marginTop:20, display:'flex', gap:8, overflowX:'auto', paddingBottom:4}}>
          {['Piccolo', 'Medio', 'Grande'].map((s, i) => (
            <div key={s} style={{
              padding:'8px 16px', borderRadius:999, fontSize:12, fontWeight:500,
              background: i === 1 ? 'var(--ink)' : 'var(--paper-2)',
              color: i === 1 ? 'var(--paper)' : 'var(--ink)',
            }}>{s}</div>
          ))}
        </div>

        <button className="btn btn-primary btn-block" style={{marginTop:20, padding:'14px', fontSize:15}}>
          aggiungi alla home
        </button>
      </div>
    </div>
  );
}

function StreakBadge({ Icon, color, bg, n }) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:4, padding:'4px 8px', background:bg, color, borderRadius:999}}>
      <Icon s={12} c={color}/>
      <span style={{fontSize:11, fontWeight:700}}>{n}</span>
    </div>
  );
}

// ── ENTRY DETAIL (full read of today's diary) ──
function EntryDetail({ go }) {
  return (
    <div className="screen-body screen-enter">
      <TopBar go={go} back="home" title="21 aprile"/>
      <div className="screen-scroll" style={{padding:'20px 28px 32px'}}>
        <div className="kicker">MARTEDÌ · GIORNO 12</div>
        <div className="serif" style={{fontSize:34, lineHeight:1.1, marginTop:4}}>
          In linea.<br/>Hai tenuto.
        </div>
        <div className="paper-lines" style={{marginTop:22, fontFamily:'Instrument Serif, serif', fontSize:20, lineHeight:'28px', color:'var(--ink-2)'}}>
          <div>3 sigarette. Sotto il limite di 5.</div>
          <div style={{fontStyle:'italic', color:'var(--ink-mute)'}}>Niente alcol. Niente gioco.</div>
          <div style={{fontStyle:'italic', color:'var(--ink-mute)'}}>PAC di aprile: versato.</div>
          <div>&nbsp;</div>
          <div className="serif-it" style={{color:'var(--ink-mute)'}}>— rapporto chiuso, 21:51</div>
        </div>

        <div style={{marginTop:22, padding:'16px 18px', background:'var(--paper-2)', borderRadius:16, border:'1px solid var(--paper-edge)'}}>
          <div className="kicker">SOMMARIO</div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:10, marginTop:10}}>
            <Stat v="3" l="fumate" c="var(--smoke)"/>
            <Stat v="0" l="unità" c="var(--drink)"/>
            <Stat v="0€" l="gioco" c="var(--bet)"/>
          </div>
        </div>

        <div style={{marginTop:18, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <button onClick={() => go('home')} style={{background:'none', border:'none', fontSize:13, color:'var(--ink-mute)', cursor:'pointer', padding:0}}>← giorno prima</button>
          <button style={{background:'none', border:'none', fontSize:13, color:'var(--ink-faint)', cursor:'not-allowed', padding:0}}>giorno dopo →</button>
        </div>
      </div>
    </div>
  );
}
function Stat({v,l,c}) {
  return (
    <div>
      <div className="serif" style={{fontSize:28, lineHeight:1, color:c}}>{v}</div>
      <div style={{fontSize:11, color:'var(--ink-mute)', marginTop:2}}>{l}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════
// APP ROOT
// ═══════════════════════════════════════════════════
function isPwaMode() {
  try {
    if (window.matchMedia('(display-mode: standalone)').matches) return true;
    if (window.navigator.standalone === true) return true;
    if (new URLSearchParams(window.location.search).has('pwa')) return true;
  } catch {}
  return false;
}

// Schedule a daily reminder via the Notifications API.
// We can't truly schedule in the background on iOS Safari — we tick every minute
// while the app is open and fire if it's 21:30 and we haven't notified yet today.
function useDailyNotifier(time) {
  React.useEffect(() => {
    if (!('Notification' in window)) return;
    const t = (time || '21:30').split(':');
    const targetH = parseInt(t[0], 10), targetM = parseInt(t[1], 10);
    const tick = () => {
      if (Notification.permission !== 'granted') return;
      const now = new Date();
      const today = now.toDateString();
      const last = localStorage.getItem('last-reminder');
      if (last === today) return;
      // fire if past target time today
      if (now.getHours() > targetH || (now.getHours() === targetH && now.getMinutes() >= targetM)) {
        try {
          new Notification('Diario Serale', {
            body: 'Quattro domande. Una verità. Apri il diario.',
            tag: 'daily-checkin',
            silent: false,
          });
          localStorage.setItem('last-reminder', today);
        } catch {}
      }
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [time]);
}

function App() {
  const pwa = isPwaMode();
  const [screen, setScreen] = useState(() => {
    try {
      // PWA mode: pick onboarding if no data, home otherwise
      if (isPwaMode() && !localStorage.getItem('hifi-c-onboarded')) return 'onboarding';
      return localStorage.getItem('hifi-c-screen') || 'home';
    } catch { return 'home'; }
  });
  const [state, setStateRaw] = useState(initial);
  const setState = (u) => setStateRaw(prev => {
    const next = typeof u === 'function' ? u(prev) : u;
    try { localStorage.setItem('app-state', JSON.stringify(next)); } catch {}
    return next;
  });
  useDailyNotifier('21:30');
  const screens = [
    ['home', 'Home'], ['onboarding','Onboarding'],
    ['checkin-intro', 'Rapporto · intro'],
    ['checkin-1', 'Step 1 · fumo'], ['checkin-2', 'Step 2 · alcol'],
    ['checkin-3', 'Step 3 · gioco'], ['checkin-4', 'Step 4 · PAC'],
    ['checkin-done', 'Riepilogo'], ['sgarro', 'Sgarro'],
    ['savings', 'Risparmi'], ['stats', 'Storia'], ['settings', 'Il patto'],
    ['widget', 'Widget iOS'], ['detail-entry', 'Dettaglio'],
  ];

  const go = (s) => {
    setScreen(s);
    try { localStorage.setItem('hifi-c-screen', s); } catch {}
  };

  let content;
  if (screen === 'home') content = <Home go={go} state={state}/>;
  else if (screen === 'onboarding') content = <Onboarding go={go} setState={setState}/>;
  else if (screen === 'checkin-intro') content = <CheckinIntro go={go}/>;
  else if (screen === 'checkin-1') content = <CheckinStep go={go} step={0} state={state} setState={setState}/>;
  else if (screen === 'checkin-2') content = <CheckinStep go={go} step={1} state={state} setState={setState}/>;
  else if (screen === 'checkin-3') content = <CheckinStep go={go} step={2} state={state} setState={setState}/>;
  else if (screen === 'checkin-4') content = <CheckinStep go={go} step={3} state={state} setState={setState}/>;
  else if (screen === 'checkin-done') content = <CheckinDone go={go} state={state} setState={setState}/>;
  else if (screen === 'sgarro') content = <Sgarro go={go} state={state} setState={setState} overSmoke={true} overDrink={false} overBet={false}/>;
  else if (screen === 'savings') content = <Savings go={go} state={state} setState={setState}/>;
  else if (screen === 'stats') content = <Stats go={go} state={state}/>;
  else if (screen === 'settings') content = <Settings go={go} state={state} setState={setState}/>;
  else if (screen === 'widget') content = <Widget go={go} state={state}/>;
  else if (screen === 'detail-entry') content = <EntryDetail go={go}/>;
  else content = <Home go={go} state={state}/>;

  if (pwa) {
    return <div className="pwa-root">{content}</div>;
  }
  return (
    <div className="stage">
      <div className="stage-head">
        <div className="eyebrow">APP DI CONTROLLO · PROTOTIPO HI-FI</div>
        <h1>Diario Serale</h1>
        <p>iPhone 12 mini · tono coach militare · navigazione cliccabile tra le schermate. Prova il flusso del check-in: Home → "Apri il diario" → 4 domande → riepilogo. Per vedere lo "sgarro", vai al passo 1 e seleziona 6+ sigarette.</p>

        <div className="screen-nav">
          {screens.map(([k, l]) => (
            <button key={k} onClick={() => go(k)} className={screen === k ? 'active' : ''}>{l}</button>
          ))}
        </div>
      </div>

      <Phone>{content}</Phone>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
