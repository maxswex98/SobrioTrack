// APPROACH B — "Punteggio" — hero score + rings
// PAC = 200€/mese fixed, separate Altri risparmi wallet

function ApproachB() {
  return (
    <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
      <B_Onboarding />
      <B_Home />
      <B_Input />
      <B_Detail />
      <B_Stats />
      <B_Settings />
    </div>
  );
}

function B_Onboarding() {
  return (
    <SketchPhone label="B · Onboarding" sub="Importa saldo PAC + conti extra">
      <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', height: '100%', gap: 12 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {[1,1,1,0].map((v,i) => (
            <div key={i} style={{ flex: 1, height: 4, background: v ? '#1A1814' : '#D9D3C2', borderRadius: 2 }} />
          ))}
        </div>
        <div className="handwrite" style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.1 }}>
          Il punto di <span className="underline-sketch">partenza</span>.
        </div>
        <div className="handwrite-body" style={{ fontSize: 13, color: '#3A362E' }}>
          Dimmi quanto hai già da parte — il punteggio partirà da lì.
        </div>

        {/* PAC import */}
        <div className="sketchy" style={{ padding: 11, background: COLORS.pac.bg }}>
          <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458', letterSpacing: 1 }}>TOTALE PAC · 200€/mese</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
            <span className="handwrite" style={{ fontSize: 32, fontWeight: 700 }}>3.420</span>
            <span className="handwrite-body" style={{ fontSize: 16 }}>€</span>
            <div style={{ flex: 1 }} />
            <span className="annotation" style={{ fontSize: 13 }}>✎ modifica</span>
          </div>
        </div>

        {/* Wallet */}
        <div className="sketchy" style={{ padding: 11, background: '#F5F2EA' }}>
          <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458', letterSpacing: 1, marginBottom: 4 }}>ALTRI CONTI</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: '#1A1814', color: '#F5F2EA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Caveat', fontSize: 15, fontWeight: 700 }}>R</div>
            <span className="handwrite-body" style={{ fontSize: 13, flex: 1 }}>Revolut</span>
            <span className="handwrite" style={{ fontSize: 19, fontWeight: 700 }}>850 €</span>
          </div>
          <div className="sketchy-dashed" style={{ padding: '6px 0', textAlign: 'center', marginTop: 4, fontFamily: 'Caveat', fontSize: 15, color: '#6A6458' }}>
            + aggiungi conto
          </div>
        </div>

        {/* Preview ring */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <ScoreRing score={85} size={130} />
        </div>

        <div style={{ flex: 1 }} />
        <button style={{
          padding: '11px 0', fontFamily: 'Kalam', fontSize: 14, fontWeight: 700,
          border: '2.5px solid #1A1814', background: '#1A1814', color: '#F5F2EA', borderRadius: 12,
        }}>
          Imposta obiettivi →
        </button>
      </div>
    </SketchPhone>
  );
}

function ScoreRing({ score = 78, size = 220 }) {
  const cx = size / 2, cy = size / 2;
  const rings = [
    { r: (size/2)-10,  c: COLORS.pac.main,   pct: 0.9 },
    { r: (size/2)-22, c: COLORS.smoke.main, pct: 0.6 },
    { r: (size/2)-34, c: COLORS.drink.main, pct: 0.85 },
    { r: (size/2)-46, c: COLORS.bet.main,   pct: 1.0 },
  ];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {rings.map((ring, i) => {
        const circ = 2 * Math.PI * ring.r;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={ring.r} stroke="#E4DFD1" strokeWidth="10" fill="none" />
            <circle cx={cx} cy={cy} r={ring.r} stroke={ring.c} strokeWidth="10" fill="none"
              strokeDasharray={`${circ * ring.pct} ${circ}`}
              strokeDashoffset={circ * 0.25}
              strokeLinecap="round"
              transform={`rotate(-90 ${cx} ${cy})`} />
          </g>
        );
      })}
      <text x={cx} y={cy + 4} textAnchor="middle"
        fontFamily="Caveat" fontWeight="700" fontSize={size * 0.32} fill="#1A1814">{score}</text>
      <text x={cx} y={cy + (size*0.18)} textAnchor="middle"
        fontFamily="Kalam" fontWeight="700" fontSize={11} fill="#6A6458" letterSpacing="1">/100</text>
    </svg>
  );
}

function B_Home() {
  return (
    <SketchPhone label="B · Home — Punteggio" sub="Ring + saldi PAC/Altri + vizi">
      <div style={{ padding: '12px 18px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="handwrite-body" style={{ fontSize: 12, color: '#6A6458' }}>mar 21 apr · giorno 12</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <BellIcon size={18} />
            <span style={{ fontFamily: 'Caveat', fontSize: 18, marginLeft: 4 }}>≡</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <ScoreRing score={78} size={160} />
        </div>

        <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458', textAlign: 'center', marginTop: -4 }}>
          <b>+4</b> da ieri · obiettivo 80
        </div>

        {/* Savings split card */}
        <div className="sketchy" style={{ padding: 10, background: COLORS.pac.bg, display: 'flex', gap: 8 }}>
          <div style={{ flex: 1 }}>
            <div className="handwrite-body" style={{ fontSize: 9, color: '#6A6458', letterSpacing: 1 }}>PAC</div>
            <div className="handwrite" style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>3.620</div>
            <div className="handwrite-body" style={{ fontSize: 9, color: '#6A6458' }}>apr ✓</div>
          </div>
          <div style={{ width: 1.5, background: '#1A1814', opacity: 0.25 }} />
          <div style={{ flex: 1 }}>
            <div className="handwrite-body" style={{ fontSize: 9, color: '#6A6458', letterSpacing: 1 }}>ALTRI</div>
            <div className="handwrite" style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>850</div>
            <div className="handwrite-body" style={{ fontSize: 9, color: '#6A6458' }}>Revolut</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <LegendRow c="smoke" label="Sigarette" val="3 / ≤5"  pct={60} />
          <LegendRow c="drink" label="Alcol"     val="0"        pct={85} />
          <LegendRow c="bet"   label="Gioco"     val="0 €"      pct={100} />
        </div>

        <button className="sketchy" style={{
          padding: '10px 0', background: '#1A1814', color: '#F5F2EA',
          fontFamily: 'Kalam', fontSize: 13, fontWeight: 700,
        }}>
          ✎  Check-in di stasera
        </button>
      </div>
    </SketchPhone>
  );
}

function LegendRow({ c, label, val, pct }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 9, height: 9, borderRadius: 9, background: COLORS[c].main, border: '1.5px solid #1A1814' }} />
      <div className="handwrite-body" style={{ fontSize: 11, fontWeight: 700, width: 65 }}>{label}</div>
      <div style={{ flex: 1, height: 5, background: '#EEEAE0', border: '1.5px solid #1A1814', borderRadius: 6, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${pct}%`, background: COLORS[c].main, borderRight: pct < 100 ? '1.5px solid #1A1814' : 'none' }} />
      </div>
      <div className="handwrite-body" style={{ fontSize: 10, color: '#3A362E', width: 50, textAlign: 'right' }}>{val}</div>
    </div>
  );
}

function B_Input() {
  return (
    <SketchPhone label="B · Inserimento" sub="3 slider vizi + PAC mese + Revolut">
      <SketchTitleBar title="Check-in · 21:47" right="×" back={false} />
      <div style={{ padding: '4px 18px', display: 'flex', flexDirection: 'column', gap: 13 }}>

        {/* PAC monthly */}
        <div className="sketchy-dashed" style={{ padding: 10, background: COLORS.pac.bg }}>
          <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700 }}>
            PAC aprile · 200 €
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 5 }}>
            {['✓ versato', 'saltato', 'dopo'].map((o, i) => (
              <div key={o} className="tag" style={{
                flex: 1, justifyContent: 'center', fontSize: 11, padding: '4px 0',
                background: i === 0 ? '#1A1814' : '#fff',
                color: i === 0 ? '#F5F2EA' : '#1A1814',
                borderColor: '#1A1814',
              }}>{o}</div>
            ))}
          </div>
        </div>

        <SliderRow c="smoke" Icon={CigIcon}   label="Sigarette"   pct={60} value="3"    hint="limite 5" />
        <SliderRow c="drink" Icon={GlassIcon} label="Alcol"       pct={0}  value="0 u." hint="limite 1" />
        <SliderRow c="bet"   Icon={DiceIcon}  label="Gioco"       pct={0}  value="0 €"  hint="limite 0" />

        <div className="sketchy" style={{ padding: 8, display: 'flex', alignItems: 'center', gap: 8, background: '#F5F2EA' }}>
          <div style={{ width: 22, height: 22, borderRadius: 5, background: '#1A1814', color: '#F5F2EA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Caveat', fontSize: 13, fontWeight: 700 }}>R</div>
          <span className="handwrite-body" style={{ fontSize: 12, fontWeight: 700, flex: 1 }}>Versato su Revolut?</span>
          <span className="tag" style={{ fontSize: 11, padding: '2px 10px' }}>+ aggiungi</span>
        </div>

        <div style={{ flex: 1 }} />
        <button style={{
          padding: '10px 0', fontFamily: 'Kalam', fontSize: 14, fontWeight: 700,
          border: '2.5px solid #1A1814', background: '#1A1814', color: '#F5F2EA', borderRadius: 12,
        }}>
          Calcola punteggio
        </button>
      </div>
    </SketchPhone>
  );
}

function SliderRow({ c, Icon, label, pct, value, hint }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
        <Icon size={15} />
        <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700, flex: 1 }}>{label}</div>
        <div className="handwrite" style={{ fontSize: 18, fontWeight: 700 }}>{value}</div>
      </div>
      <div style={{ height: 18, background: COLORS[c].bg, border: '2px solid #1A1814', borderRadius: 18, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${pct}%`, background: COLORS[c].main, borderRadius: 16, borderRight: '2px solid #1A1814' }} />
        <div style={{ position: 'absolute', top: -3, left: `calc(${pct}% - 9px)`, width: 18, height: 18, borderRadius: 18, background: '#F5F2EA', border: '2.5px solid #1A1814' }} />
      </div>
      <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458', marginTop: 2 }}>{hint}</div>
    </div>
  );
}

function B_Detail() {
  return (
    <SketchPhone label="B · Dettaglio Risparmi" sub="Anello PAC + wallet Revolut">
      <SketchTitleBar title="Risparmi" right="⇣" />
      <div style={{ padding: '4px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="sketchy" style={{ padding: 14, background: COLORS.pac.bg, display: 'flex', gap: 12, alignItems: 'center' }}>
          <ScoreRing score={90} size={100} />
          <div>
            <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458', letterSpacing: 1 }}>TOTALE</div>
            <div className="handwrite" style={{ fontSize: 28, fontWeight: 700, lineHeight: 1 }}>€ 4.470</div>
            <div className="handwrite-body" style={{ fontSize: 11 }}>PAC <b>3.620</b> · Altri <b>850</b></div>
          </div>
        </div>

        <div className="sketchy" style={{ padding: 11, background: '#F5F2EA' }}>
          <div className="section-label" style={{ marginBottom: 4 }}>PAC · 200€/MESE</div>
          <div className="handwrite" style={{ fontSize: 24, fontWeight: 700, lineHeight: 1 }}>3.620 €</div>
          <SquiggleChart d="M0 70 L 30 64 L 60 56 L 90 48 L 120 40 L 150 32 L 180 24 L 210 18 L 240 12 L 260 8" color={COLORS.pac.main} w={260} h={60} fill />
          <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458' }}>17 versamenti · prossimo 1 maggio</div>
        </div>

        <div>
          <div className="section-label" style={{ marginBottom: 6 }}>ALTRI CONTI</div>
          <div className="sketchy" style={{ background: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '9px 10px', gap: 10 }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: '#1A1814', color: '#F5F2EA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Caveat', fontSize: 16, fontWeight: 700 }}>R</div>
              <div style={{ flex: 1 }}>
                <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700 }}>Revolut</div>
                <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458' }}>ult. 15 apr · +50€</div>
              </div>
              <div className="handwrite" style={{ fontSize: 18, fontWeight: 700 }}>850 €</div>
            </div>
            <div className="sketchy-dashed" style={{ margin: 6, padding: '6px 0', borderRadius: 8, textAlign: 'center', fontFamily: 'Caveat', fontSize: 15, color: '#6A6458' }}>
              + aggiungi conto
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6 }}>
          <div className="tag" style={{ flex: 1, justifyContent: 'center', fontSize: 12, padding: '5px 0', background: COLORS.pac.bg }}>+ PAC mensile</div>
          <div className="tag" style={{ flex: 1, justifyContent: 'center', fontSize: 12, padding: '5px 0' }}>+ Revolut</div>
        </div>
      </div>
    </SketchPhone>
  );
}

function B_Stats() {
  return (
    <SketchPhone label="B · Statistiche" sub="Heatmap mese + anelli storici">
      <SketchTitleBar title="Trend" back={false} />
      <div style={{ padding: '4px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="handwrite-body" style={{ fontSize: 12 }}>Aprile 2026</div>

        <div className="sketchy" style={{ padding: 10, background: '#F5F2EA' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
            {['L','M','M','G','V','S','D'].map(d => (
              <div key={d} className="handwrite-body" style={{ fontSize: 9, textAlign: 'center', color: '#6A6458' }}>{d}</div>
            ))}
            {Array.from({ length: 30 }, (_, i) => {
              const vals = [0, 0, 1, 2, 1, 3, 3, 2, 2, 3, 1, 2, 3, 3, 2, 1, 0, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2, 1, 3, 3];
              const v = vals[i] || 0;
              const shades = ['#EEEAE0', '#F6D6C4', '#F3B89C', '#E88A6B'];
              return (
                <div key={i} style={{
                  aspectRatio: '1', background: shades[v],
                  border: '1.5px solid #1A1814', borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Kalam', fontSize: 9, fontWeight: 700,
                }}>{i + 1}</div>
              );
            })}
          </div>
        </div>

        {/* Savings trend */}
        <div className="sketchy" style={{ padding: 11, background: COLORS.pac.bg }}>
          <div className="section-label" style={{ marginBottom: 3 }}>RISPARMI · TOTALE</div>
          <div className="handwrite" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1 }}>€ 4.470</div>
          <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458' }}>+250 € questo mese</div>
        </div>

        <div className="sketchy" style={{ padding: 10, background: '#fff' }}>
          <div className="section-label" style={{ marginBottom: 6 }}>ULTIME 4 SETTIMANE</div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {[62, 68, 74, 78].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <ScoreRing score={s} size={50} />
                <div className="handwrite-body" style={{ fontSize: 9, color: '#6A6458', marginTop: 2 }}>sett {i+1}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sketchy-dashed" style={{ padding: 9, display: 'flex', alignItems: 'center', gap: 8, background: '#F5F2EA' }}>
          <span style={{ fontFamily: 'Caveat', fontSize: 22 }}>✱</span>
          <div className="handwrite-body" style={{ fontSize: 11, flex: 1, lineHeight: 1.3 }}>
            <b>Insight</b> — Il venerdì sera sei più debole sull'alcol.
          </div>
        </div>
      </div>
    </SketchPhone>
  );
}

function B_Settings() {
  return (
    <SketchPhone label="B · Impostazioni" sub="Pesi · PAC 200€ · conti extra">
      <SketchTitleBar title="Impostazioni" back={false} />
      <div style={{ padding: '4px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>

        <div className="sketchy" style={{ padding: 10, background: '#F5F2EA' }}>
          <div className="section-label" style={{ marginBottom: 6 }}>PESI PUNTEGGIO</div>
          {[
            { c: 'pac',   label: 'Risparmi',  pct: 30 },
            { c: 'smoke', label: 'Sigarette', pct: 25 },
            { c: 'drink', label: 'Alcol',     pct: 20 },
            { c: 'bet',   label: 'Gioco',     pct: 25 },
          ].map(r => (
            <div key={r.c} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
              <div style={{ width: 70, display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 8, height: 8, borderRadius: 8, background: COLORS[r.c].main, border: '1.5px solid #1A1814' }} />
                <span className="handwrite-body" style={{ fontSize: 11, fontWeight: 700 }}>{r.label}</span>
              </div>
              <div style={{ flex: 1, height: 9, background: '#fff', border: '1.5px solid #1A1814', borderRadius: 10, position: 'relative' }}>
                <div style={{ width: `${r.pct}%`, height: '100%', background: COLORS[r.c].main, borderRadius: 10 }} />
              </div>
              <div className="handwrite-body" style={{ fontSize: 11, width: 28, textAlign: 'right' }}>{r.pct}%</div>
            </div>
          ))}
        </div>

        <div>
          <div className="section-label" style={{ marginBottom: 5 }}>RISPARMI</div>
          <div className="sketchy" style={{ background: '#fff' }}>
            <SetRow label="PAC mensile" detail="200 €" c="pac" />
            <SetRow label="Totale PAC" detail="3.620 €" c="pac" />
            <SetRow label="Revolut" detail="850 €" c="pac" />
            <SetRow label="+ aggiungi conto" detail="" last />
          </div>
        </div>

        <div className="sketchy" style={{ background: '#fff' }}>
          <SetRow label="Obiettivo punteggio" detail="80" />
          <SetRow label="Notifiche check-in" detail="21:30" toggle toggleOn />
          <SetRow label="Face ID" detail="" toggle toggleOn last />
        </div>
      </div>
    </SketchPhone>
  );
}

Object.assign(window, { ApproachB, ScoreRing });
