// APPROACH A — "Cruscotto" — 2x2 grid of equal cards, quick tap input
// PAC is fixed 200€/month, with separate "Altri risparmi" (Revolut) wallet.

function ApproachA() {
  return (
    <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
      <A_Onboarding />
      <A_Home />
      <A_Input />
      <A_Detail />
      <A_Stats />
      <A_Settings />
    </div>
  );
}

// ─────────────── Onboarding ───────────────
function A_Onboarding() {
  return (
    <SketchPhone label="A · Onboarding" sub="Importa PAC accumulato + altri risparmi">
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', height: '100%', gap: 12 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {[1,1,1,0].map((v,i) => (
            <div key={i} style={{ flex: 1, height: 4, background: v ? '#1A1814' : '#D9D3C2', borderRadius: 2 }} />
          ))}
        </div>
        <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458', letterSpacing: 1 }}>
          STEP 3 · RISPARMI
        </div>
        <div className="handwrite" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.05 }}>
          Quanto hai <span className="underline-sketch">già da parte?</span>
        </div>

        <div className="sketchy" style={{ padding: 11, background: COLORS.pac.bg }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <CoinIcon size={18} />
            <div className="handwrite-body" style={{ fontSize: 13, fontWeight: 700, flex: 1 }}>
              Totale PAC accumulato
            </div>
          </div>
          <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458', marginBottom: 6 }}>
            Il tuo PAC è di <b>200 €/mese</b> fissi
          </div>
          <div className="sketchy" style={{ padding: '8px 10px', background: '#fff', display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span className="handwrite" style={{ fontSize: 28, fontWeight: 700 }}>3.420</span>
            <span className="handwrite-body" style={{ fontSize: 16, color: '#6A6458' }}>€</span>
            <div style={{ flex: 1 }} />
            <span className="annotation" style={{ fontSize: 13 }}>da importare ✎</span>
          </div>
        </div>

        <div className="sketchy" style={{ padding: 11, background: '#F5F2EA' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontFamily: 'Caveat', fontSize: 22, fontWeight: 700 }}>⊞</span>
            <div className="handwrite-body" style={{ fontSize: 13, fontWeight: 700, flex: 1 }}>
              Altri risparmi (wallet)
            </div>
          </div>
          <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458', marginBottom: 6 }}>
            Conti / piattaforme extra — saldo attuale
          </div>
          <div className="sketchy" style={{ padding: '8px 10px', background: '#fff', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: '#1A1814', color: '#F5F2EA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Caveat', fontSize: 14, fontWeight: 700 }}>R</div>
            <span className="handwrite-body" style={{ fontSize: 13, flex: 1 }}>Revolut</span>
            <span className="handwrite" style={{ fontSize: 18, fontWeight: 700 }}>850 €</span>
          </div>
          <div className="sketchy-dashed" style={{ padding: '6px 10px', textAlign: 'center', fontFamily: 'Caveat', fontSize: 16, color: '#6A6458' }}>
            + aggiungi conto
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <button className="sketchy" style={{
          padding: '11px 0', background: '#1A1814', color: '#F5F2EA',
          fontFamily: 'Kalam, cursive', fontSize: 15, fontWeight: 700,
        }}>
          Avanti →
        </button>
      </div>
    </SketchPhone>
  );
}

// ─────────────── Home ───────────────
function A_Home() {
  return (
    <SketchPhone label="A · Home — Cruscotto" sub="Risparmi combinati + 3 vizi">
      <div style={{ padding: '16px 18px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div className="handwrite-body" style={{ fontSize: 12, color: '#6A6458' }}>mar 21 apr</div>
            <div className="handwrite" style={{ fontSize: 24, fontWeight: 700, lineHeight: 1 }}>Ciao, Marco</div>
          </div>
          <div style={{ width: 32, height: 32, border: '2px solid #1A1814', borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <BellIcon size={14} />
          </div>
        </div>

        {/* Risparmi — PAC + Altri lato a lato */}
        <div className="sketchy" style={{ padding: 11, background: COLORS.pac.bg }}>
          <div className="section-label" style={{ marginBottom: 6 }}>RISPARMI TOTALI</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1 }}>
              <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458' }}>PAC</div>
              <div className="handwrite" style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>3.620 €</div>
              <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458' }}>17 mesi · 200 fissi</div>
            </div>
            <div style={{ width: 1.5, background: '#1A1814', opacity: 0.25 }} />
            <div style={{ flex: 1 }}>
              <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458' }}>Altri</div>
              <div className="handwrite" style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>850 €</div>
              <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458' }}>Revolut</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
            <div className="tag" style={{ fontSize: 11, background: '#1A1814', color: '#F5F2EA', borderColor: '#1A1814' }}>
              ✓ Aprile PAC versato
            </div>
            <div className="tag" style={{ fontSize: 11 }}>+ Revolut</div>
          </div>
        </div>

        {/* 3 vice cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
          <DashCard c="smoke" Icon={CigIcon}   title="Sigarette" big="3"    sub="oggi"   streak="ieri 5" danger />
          <DashCard c="drink" Icon={GlassIcon} title="Alcol"     big="0"    sub="oggi"   streak="4d ✓" />
          <DashCard c="bet"   Icon={DiceIcon}  title="Gioco"     big="0€"   sub="oggi"   streak="18d ✓" />
        </div>

        {/* Score */}
        <div className="sketchy" style={{ padding: 11, display: 'flex', alignItems: 'center', gap: 10, background: '#1A1814', color: '#F5F2EA' }}>
          <div className="handwrite" style={{ fontSize: 34, fontWeight: 700, lineHeight: 1 }}>78</div>
          <div style={{ flex: 1 }}>
            <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700 }}>Punteggio di oggi</div>
            <div className="handwrite-body" style={{ fontSize: 10, opacity: 0.7 }}>↑ 4 rispetto a ieri</div>
          </div>
          <span style={{ fontFamily: 'Caveat', fontSize: 22 }}>›</span>
        </div>

        <div className="annotation" style={{ alignSelf: 'flex-start', marginTop: -4, transform: 'rotate(-2deg)' }}>
          check-in serale ↓
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 24, left: 14, right: 14,
        height: 48, borderTop: '2px solid #1A1814',
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        background: '#F5F2EA',
      }}>
        {['Home', 'Risparmi', 'Aggiungi', 'Stats'].map((t, i) => (
          <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <div style={{
              width: 16, height: 16, border: '2px solid #1A1814',
              borderRadius: i === 2 ? 999 : 4,
              background: i === 0 ? '#1A1814' : 'transparent',
            }} />
            <div className="handwrite-body" style={{ fontSize: 9, fontWeight: i === 0 ? 700 : 400 }}>{t}</div>
          </div>
        ))}
      </div>
    </SketchPhone>
  );
}

function DashCard({ c, Icon, title, big, sub, streak, danger }) {
  return (
    <div className="sketchy" style={{
      padding: 9, background: COLORS[c].bg,
      display: 'flex', flexDirection: 'column', gap: 3, minHeight: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Icon size={16} />
        <div className="handwrite-body" style={{ fontSize: 9, fontWeight: 700, color: '#6A6458' }}>
          {title.toUpperCase()}
        </div>
      </div>
      <div className="handwrite" style={{ fontSize: 24, fontWeight: 700, lineHeight: 1, marginTop: 3 }}>
        {big}
      </div>
      <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458' }}>{sub}</div>
      <div style={{ flex: 1 }} />
      <div className="tag" style={{
        fontSize: 9, padding: '1px 6px', alignSelf: 'flex-start',
        background: danger ? '#1A1814' : 'transparent',
        color: danger ? '#F5F2EA' : '#1A1814',
      }}>{streak}</div>
    </div>
  );
}

// ─────────────── Input ───────────────
function A_Input() {
  return (
    <SketchPhone label="A · Check-in serale" sub="3 vizi + PAC mensile + versamento Revolut">
      <SketchTitleBar title="Check-in serale" right="×" back={false} />
      <div style={{ padding: '4px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="handwrite-body" style={{ fontSize: 12, color: '#6A6458' }}>
          Martedì 21 aprile · 21:47
        </div>

        {/* PAC monthly confirm — only shows when month not confirmed */}
        <div className="sketchy-dashed" style={{ padding: 10, background: COLORS.pac.bg }}>
          <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700, marginBottom: 4 }}>
            PAC di aprile (200 €)
          </div>
          <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458', marginBottom: 6 }}>
            Confermi il versamento di questo mese?
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <div className="tag" style={{ flex: 1, justifyContent: 'center', padding: '5px 0', fontSize: 12, background: '#1A1814', color: '#F5F2EA', borderColor: '#1A1814' }}>
              ✓ versato
            </div>
            <div className="tag" style={{ flex: 1, justifyContent: 'center', padding: '5px 0', fontSize: 12 }}>saltato</div>
            <div className="tag" style={{ flex: 1, justifyContent: 'center', padding: '5px 0', fontSize: 12 }}>dopo</div>
          </div>
        </div>

        <InputRow c="smoke" Icon={CigIcon} title="Sigarette fumate"
          value="3" options={['+1', '+3', '+5', '+10', 'reset']} />
        <InputRow c="drink" Icon={GlassIcon} title="Unità di alcol"
          value="0" options={['0', '+1', '+2', '+3+', 'troppo']} />
        <InputRow c="bet" Icon={DiceIcon} title="Speso in gioco"
          value="0 €" options={['0', '+5', '+20', '+50', 'altro']} />

        <div className="sketchy-dashed" style={{
          padding: '8px 10px', background: '#F5F2EA',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontFamily: 'Caveat', fontSize: 22, fontWeight: 700 }}>+</span>
          <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700, flex: 1 }}>
            Versato qualcosa su Revolut?
          </div>
          <span className="annotation" style={{ fontSize: 13 }}>apri →</span>
        </div>

        <button className="sketchy" style={{
          padding: '10px 0', background: '#1A1814', color: '#F5F2EA',
          fontFamily: 'Kalam, cursive', fontSize: 14, fontWeight: 700,
          marginTop: 2,
        }}>
          Salva check-in
        </button>
      </div>
    </SketchPhone>
  );
}

function InputRow({ c, Icon, title, value, options }) {
  return (
    <div className="sketchy" style={{ padding: 8, background: COLORS[c].bg }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
        <Icon size={15} />
        <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700, flex: 1 }}>{title}</div>
        <div className="handwrite" style={{ fontSize: 20, fontWeight: 700 }}>{value}</div>
      </div>
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {options.map(o => (
          <div key={o} className="tag" style={{ fontSize: 11, padding: '1px 8px' }}>{o}</div>
        ))}
      </div>
    </div>
  );
}

// ─────────────── Detail — Risparmi (new primary detail) ───────────────
function A_Detail() {
  return (
    <SketchPhone label="A · Dettaglio Risparmi" sub="PAC storico + wallet conti extra">
      <SketchTitleBar title="Risparmi" right="…" />
      <div style={{ padding: '4px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Hero total */}
        <div className="sketchy" style={{ padding: 12, background: COLORS.pac.bg, textAlign: 'center' }}>
          <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458', letterSpacing: 1 }}>TOTALE</div>
          <div className="handwrite" style={{ fontSize: 42, fontWeight: 700, lineHeight: 1 }}>€ 4.470</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 6 }}>
            <div className="handwrite-body" style={{ fontSize: 11 }}>
              <b>PAC</b> 3.620 €
            </div>
            <span style={{ color: '#6A6458' }}>·</span>
            <div className="handwrite-body" style={{ fontSize: 11 }}>
              <b>Altri</b> 850 €
            </div>
          </div>
        </div>

        {/* PAC card */}
        <div className="sketchy" style={{ padding: 10, background: '#F5F2EA' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <CoinIcon size={16} />
            <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700, flex: 1 }}>PAC · 200 €/mese</div>
            <div className="tag" style={{ fontSize: 10, background: COLORS.pac.bg }}>17 versamenti</div>
          </div>
          <SquiggleChart
            d="M0 70 L 30 66 L 60 58 L 90 50 L 120 42 L 150 34 L 180 28 L 210 22 L 240 14 L 260 8"
            color={COLORS.pac.main} w={260} h={70} fill
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <span className="handwrite-body" style={{ fontSize: 9, color: '#6A6458' }}>dic '24</span>
            <span className="handwrite-body" style={{ fontSize: 9, color: '#6A6458' }}>apr '26</span>
          </div>
        </div>

        {/* Wallet list */}
        <div>
          <div className="section-label" style={{ marginBottom: 6 }}>ALTRI CONTI</div>
          <div className="sketchy" style={{ background: '#fff' }}>
            <div style={{
              display: 'flex', alignItems: 'center', padding: '9px 10px',
              borderBottom: '1.5px dashed #C8C2B1', gap: 10,
            }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: '#1A1814', color: '#F5F2EA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Caveat', fontSize: 16, fontWeight: 700 }}>R</div>
              <div style={{ flex: 1 }}>
                <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700 }}>Revolut</div>
                <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458' }}>ult. vers. 15 apr · +50€</div>
              </div>
              <div className="handwrite" style={{ fontSize: 18, fontWeight: 700 }}>850 €</div>
            </div>
            <div className="sketchy-dashed" style={{
              padding: '8px 10px', margin: 6, borderRadius: 8,
              textAlign: 'center', fontFamily: 'Caveat', fontSize: 15, color: '#6A6458',
            }}>
              + aggiungi conto
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6 }}>
          <div className="tag" style={{ flex: 1, justifyContent: 'center', fontSize: 12, padding: '6px 0', background: COLORS.pac.bg }}>+ PAC mensile</div>
          <div className="tag" style={{ flex: 1, justifyContent: 'center', fontSize: 12, padding: '6px 0' }}>+ vers. Revolut</div>
        </div>
      </div>
    </SketchPhone>
  );
}

// ─────────────── Stats ───────────────
function A_Stats() {
  return (
    <SketchPhone label="A · Statistiche" sub="Trend · risparmi + vizi">
      <SketchTitleBar title="Statistiche" right="⌕" back={false} />
      <div style={{ padding: '4px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="sketchy" style={{ padding: 3, display: 'flex', background: '#EEEAE0' }}>
          {['Settimana', 'Mese', 'Anno'].map((p, i) => (
            <div key={p} style={{
              flex: 1, textAlign: 'center', padding: '5px 0',
              fontFamily: 'Kalam, cursive', fontSize: 12, fontWeight: 700,
              background: i === 1 ? '#1A1814' : 'transparent',
              color: i === 1 ? '#F5F2EA' : '#1A1814',
              borderRadius: 10,
            }}>{p}</div>
          ))}
        </div>

        <div className="sketchy" style={{ padding: 10, background: '#F5F2EA' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458', letterSpacing: 1 }}>PUNTEGGIO MEDIO</div>
              <div className="handwrite" style={{ fontSize: 32, fontWeight: 700 }}>73</div>
            </div>
            <div className="tag" style={{ background: COLORS.pac.bg, fontSize: 11 }}>↑ +8</div>
          </div>
          <SquiggleChart d="M0 60 Q 30 40, 60 45 T 120 30 T 180 20 T 240 15 T 260 10" w={260} h={60} fill />
        </div>

        {[
          { c: 'pac',   label: 'PAC',       val: '200 €',  sub: 'aprile ✓', trend: '100%' },
          { c: 'pac',   label: 'Altri',     val: '50 €',   sub: 'Revolut',  trend: '+6%', icon: <span style={{ fontFamily:'Caveat', fontSize: 16 }}>⊞</span> },
          { c: 'smoke', label: 'Sigarette', val: '32',     sub: 'fumate',   trend: '-18%' },
          { c: 'drink', label: 'Alcol',     val: '4',      sub: 'unità',    trend: '-50%' },
          { c: 'bet',   label: 'Gioco',     val: '0 €',    sub: 'speso',    trend: '✓' },
        ].map((r, i) => (
          <div key={i} className="sketchy" style={{
            padding: '8px 10px', background: COLORS[r.c].bg,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <div style={{ width: 80 }}>
              <div className="handwrite-body" style={{ fontSize: 9, color: '#6A6458', letterSpacing: 1 }}>{r.label.toUpperCase()}</div>
              <div className="handwrite" style={{ fontSize: 16, fontWeight: 700, lineHeight: 1 }}>{r.val}</div>
              <div className="handwrite-body" style={{ fontSize: 9, color: '#6A6458' }}>{r.sub}</div>
            </div>
            <div style={{ flex: 1 }}>
              <Sparkline bars={[3, 5, 2, 4, 6, 3, 5]} color="#1A1814" maxH={26} />
            </div>
            <div className="tag" style={{ fontSize: 10 }}>{r.trend}</div>
          </div>
        ))}
      </div>
    </SketchPhone>
  );
}

// ─────────────── Settings ───────────────
function A_Settings() {
  return (
    <SketchPhone label="A · Impostazioni" sub="PAC 200€ fisso + gestione conti">
      <SketchTitleBar title="Impostazioni" back={false} />
      <div style={{ padding: '4px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div>
          <div className="section-label" style={{ marginBottom: 5 }}>RISPARMI</div>
          <div className="sketchy" style={{ background: '#fff' }}>
            <SetRow label="PAC mensile" detail="200 € fissi" c="pac" />
            <SetRow label="Totale PAC accumulato" detail="3.620 €" c="pac" />
            <SetRow label="Conti extra" detail="Revolut · 850€" c="pac" last />
          </div>
        </div>

        <div>
          <div className="section-label" style={{ marginBottom: 5 }}>LIMITI VIZI</div>
          <div className="sketchy" style={{ background: '#fff' }}>
            <SetRow label="Sigarette / giorno" detail="≤ 5" c="smoke" />
            <SetRow label="Alcol / settimana" detail="≤ 3 unità" c="drink" />
            <SetRow label="Gioco" detail="0 €" c="bet" last />
          </div>
        </div>

        <div>
          <div className="section-label" style={{ marginBottom: 5 }}>NOTIFICHE & PROTEZIONE</div>
          <div className="sketchy" style={{ background: '#fff' }}>
            <SetRow label="Check-in serale" detail="21:30" toggle toggleOn />
            <SetRow label="Promemoria PAC" detail="inizio mese" toggle toggleOn />
            <SetRow label="Face ID" detail="" toggle toggleOn />
            <SetRow label="Esporta dati" detail=".csv" last />
          </div>
        </div>
      </div>
    </SketchPhone>
  );
}

function SetRow({ label, detail, c, toggle, toggleOn, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '8px 10px',
      borderBottom: last ? 'none' : '1.5px dashed #C8C2B1', gap: 8,
    }}>
      {c && <div style={{ width: 12, height: 12, borderRadius: 3, border: '2px solid #1A1814', background: COLORS[c].bg }} />}
      <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700, flex: 1 }}>{label}</div>
      {detail && <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458' }}>{detail}</div>}
      {toggle ? (
        <div style={{
          width: 30, height: 18, borderRadius: 18,
          border: '2px solid #1A1814',
          background: toggleOn ? '#1A1814' : 'transparent',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 1, left: toggleOn ? 13 : 1,
            width: 12, height: 12, borderRadius: 12,
            background: toggleOn ? '#F5F2EA' : '#1A1814',
          }} />
        </div>
      ) : (
        <span style={{ fontFamily: 'Caveat', fontSize: 18 }}>›</span>
      )}
    </div>
  );
}

Object.assign(window, { ApproachA, SetRow });
