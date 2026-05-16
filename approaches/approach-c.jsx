// APPROACH C — "Diario serale" — conversational journal
// PAC 200€ fixed + Altri risparmi (Revolut)

function ApproachC() {
  return (
    <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
      <C_Onboarding />
      <C_Home />
      <C_Input />
      <C_Detail />
      <C_Stats />
      <C_Settings />
    </div>
  );
}

function C_Onboarding() {
  return (
    <SketchPhone label="C · Onboarding" sub="Conversational · importo iniziale">
      <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', height: '100%', gap: 10 }}>
        <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458', letterSpacing: 1 }}>
          BENVENUTO · 3 / 4
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="sketchy" style={{
            padding: '9px 12px', background: '#fff', alignSelf: 'flex-start',
            maxWidth: '90%', borderRadius: '18px 18px 18px 4px',
          }}>
            <div className="handwrite-body" style={{ fontSize: 12 }}>
              Quanto hai già nel<br/>PAC? (<b>200€/mese fissi</b>)
            </div>
          </div>
          <div className="sketchy" style={{
            padding: '9px 12px', background: COLORS.pac.bg, alignSelf: 'flex-end',
            maxWidth: '70%', borderRadius: '18px 18px 4px 18px',
          }}>
            <div className="handwrite" style={{ fontSize: 18, fontWeight: 700 }}>3.420 €</div>
          </div>
          <div className="sketchy" style={{
            padding: '9px 12px', background: '#fff', alignSelf: 'flex-start',
            maxWidth: '90%', borderRadius: '18px 18px 18px 4px',
          }}>
            <div className="handwrite-body" style={{ fontSize: 12 }}>
              Hai altri conti con<br/>soldi da parte? (Revolut,<br/>Hype, conto deposito…)
            </div>
          </div>
          <div className="sketchy" style={{
            padding: '9px 12px', background: COLORS.pac.bg, alignSelf: 'flex-end',
            maxWidth: '85%', borderRadius: '18px 18px 4px 18px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: '#1A1814', color: '#F5F2EA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Caveat', fontSize: 12, fontWeight: 700 }}>R</div>
              <span className="handwrite-body" style={{ fontSize: 12 }}>Revolut</span>
              <span className="handwrite" style={{ fontSize: 16, fontWeight: 700 }}>850 €</span>
            </div>
          </div>
          <div className="sketchy" style={{
            padding: '9px 12px', background: '#fff', alignSelf: 'flex-start',
            maxWidth: '90%', borderRadius: '18px 18px 18px 4px',
          }}>
            <div className="handwrite-body" style={{ fontSize: 12 }}>
              Bene. <b>4.270 €</b> di partenza.<br/>
              Ora parliamo dei tuoi limiti.
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 6 }}>
          <div className="tag" style={{ flex: 1, justifyContent: 'center', padding: '9px 0', fontSize: 12 }}>
            + altro conto
          </div>
          <div className="tag" style={{ flex: 2, justifyContent: 'center', padding: '9px 0', fontSize: 12, background: '#1A1814', color: '#F5F2EA', borderColor: '#1A1814' }}>
            continua →
          </div>
        </div>
      </div>
    </SketchPhone>
  );
}

function C_Home() {
  return (
    <SketchPhone label="C · Home — Diario" sub="Entry + streak + saldi">
      <div style={{ padding: '10px 18px 0', display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458' }}>martedì</div>
            <div className="handwrite" style={{ fontSize: 20, fontWeight: 700, lineHeight: 1 }}>21 aprile</div>
          </div>
          <div className="tag" style={{ background: '#1A1814', color: '#F5F2EA', borderColor: '#1A1814', fontSize: 11 }}>
            giorno 12
          </div>
        </div>

        {/* Today's diary entry */}
        <div className="sketchy" style={{
          padding: '10px 12px', background: '#FBF7EB',
          backgroundImage: 'linear-gradient(to bottom, transparent 0, transparent 21px, #E4DFD1 21px, #E4DFD1 22px, transparent 22px)',
          backgroundSize: '100% 22px',
          lineHeight: '22px',
        }}>
          <div className="handwrite" style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>Oggi...</div>
          <div className="handwrite-body" style={{ fontSize: 12, color: '#3A362E' }}>
            ✎ <b>3</b> sigarette · sotto limite<br/>
            ✓ niente alcol<br/>
            ✓ niente gioco
          </div>
          <div className="annotation" style={{ fontSize: 13, marginTop: 2 }}>— buon giorno.</div>
        </div>

        {/* Savings card */}
        <div className="sketchy" style={{ padding: 10, background: COLORS.pac.bg }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
            <CoinIcon size={14} />
            <div className="handwrite-body" style={{ fontSize: 11, fontWeight: 700 }}>Risparmi</div>
            <span className="tag" style={{ fontSize: 9, padding: '0 6px', marginLeft: 'auto', background: '#1A1814', color: '#F5F2EA', borderColor: '#1A1814' }}>apr PAC ✓</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ flex: 1 }}>
              <div className="handwrite-body" style={{ fontSize: 9, color: '#6A6458' }}>PAC</div>
              <div className="handwrite" style={{ fontSize: 20, fontWeight: 700, lineHeight: 1 }}>3.620€</div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="handwrite-body" style={{ fontSize: 9, color: '#6A6458' }}>Altri · R</div>
              <div className="handwrite" style={{ fontSize: 20, fontWeight: 700, lineHeight: 1 }}>850€</div>
            </div>
          </div>
        </div>

        {/* Streak — 3 vizi */}
        <div className="sketchy-dashed" style={{ padding: 8, background: '#F5F2EA' }}>
          <div className="section-label" style={{ marginBottom: 4 }}>GIORNI DI FILA</div>
          {[
            { c: 'smoke', Icon: CigIcon,   label: 'Sigarette', days: 3,  state: 'sotto lim.' },
            { c: 'drink', Icon: GlassIcon, label: 'Alcol',     days: 4,  state: 'senza' },
            { c: 'bet',   Icon: DiceIcon,  label: 'Gioco',     days: 18, state: 'senza' },
          ].map(r => (
            <div key={r.c} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 0', borderBottom: '1px dashed #C8C2B1' }}>
              <div style={{ width: 20, height: 20, borderRadius: 5, background: COLORS[r.c].bg, border: '1.5px solid #1A1814', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <r.Icon size={12} />
              </div>
              <div className="handwrite-body" style={{ fontSize: 11, fontWeight: 700, flex: 1 }}>{r.label}</div>
              <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458', marginRight: 4 }}>{r.state}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FlameIcon size={12} />
                <span className="handwrite" style={{ fontSize: 16, fontWeight: 700 }}>{r.days}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="sketchy" style={{
          padding: '10px 0', background: '#1A1814', color: '#F5F2EA',
          fontFamily: 'Caveat', fontSize: 18, fontWeight: 700,
        }}>
          Comincia il diario di oggi
        </button>
      </div>
    </SketchPhone>
  );
}

function C_Input() {
  return (
    <SketchPhone label="C · Inserimento" sub="Guidato · 4 step · include PAC se nuovo mese">
      <div style={{ padding: '18px 20px 0', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Caveat', fontSize: 26 }}>×</span>
          <div style={{ display: 'flex', gap: 3 }}>
            {[1,1,0,0].map((v,i) => (
              <div key={i} style={{ width: 20, height: 4, background: v ? '#1A1814' : '#D9D3C2', borderRadius: 2 }} />
            ))}
          </div>
          <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458' }}>2/4</div>
        </div>

        <div style={{ marginTop: 22 }}>
          <CigIcon size={32} color={COLORS.smoke.main} />
        </div>

        <div className="handwrite" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.1, marginTop: 12 }}>
          Quante sigarette<br/>hai fumato oggi?
        </div>
        <div className="handwrite-body" style={{ fontSize: 12, color: '#6A6458', marginTop: 4 }}>
          il tuo limite è <b>5</b>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, '8+'].map((n, i) => (
            <div key={i} className="sketchy" style={{
              width: 'calc(33.33% - 4px)',
              aspectRatio: '1.7',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: n === 3 ? COLORS.smoke.main : COLORS.smoke.bg,
              color: n === 3 ? '#F5F2EA' : '#1A1814',
            }}>
              <span className="handwrite" style={{ fontSize: 26, fontWeight: 700 }}>{n}</span>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        <div className="annotation" style={{ alignSelf: 'center', transform: 'rotate(1deg)', marginBottom: 4 }}>
          ci sei quasi al limite...
        </div>
        <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
          <div className="tag" style={{ flex: 1, justifyContent: 'center', padding: '9px 0', fontSize: 12 }}>
            ← indietro
          </div>
          <div className="tag" style={{ flex: 2, justifyContent: 'center', padding: '9px 0', fontSize: 12, background: '#1A1814', color: '#F5F2EA', borderColor: '#1A1814' }}>
            avanti →
          </div>
        </div>
      </div>
    </SketchPhone>
  );
}

function C_Detail() {
  return (
    <SketchPhone label="C · Dettaglio Risparmi" sub="Racconto · PAC + Revolut">
      <SketchTitleBar title="I tuoi risparmi" right="…" />
      <div style={{ padding: '4px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="sketchy" style={{ padding: 14, background: COLORS.pac.bg, textAlign: 'center' }}>
          <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458', letterSpacing: 1 }}>
            HAI DA PARTE
          </div>
          <div className="handwrite" style={{ fontSize: 48, fontWeight: 700, lineHeight: 1, marginTop: 2 }}>€ 4.470</div>
          <div className="handwrite-body" style={{ fontSize: 11, color: '#3A362E', marginTop: 4 }}>
            ben fatto. crescono di <b>200€/mese</b>.
          </div>
        </div>

        <div className="sketchy" style={{ padding: 11, background: '#F5F2EA' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700 }}>PAC · 200€/mese</div>
            <div className="handwrite" style={{ fontSize: 22, fontWeight: 700 }}>3.620 €</div>
          </div>
          <SquiggleChart d="M0 60 L 30 56 L 60 48 L 90 42 L 120 35 L 150 28 L 180 20 L 210 14 L 240 10 L 260 6" color={COLORS.pac.main} w={260} h={50} fill />
          <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458', marginTop: 2 }}>
            aprile confermato ✓ · prossimo 1 maggio
          </div>
        </div>

        <div className="sketchy" style={{ padding: 11, background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: '#1A1814', color: '#F5F2EA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Caveat', fontSize: 16, fontWeight: 700 }}>R</div>
            <div className="handwrite-body" style={{ fontSize: 12, fontWeight: 700, flex: 1 }}>Revolut</div>
            <div className="handwrite" style={{ fontSize: 22, fontWeight: 700 }}>850 €</div>
          </div>
          <div className="handwrite-body" style={{ fontSize: 10, color: '#6A6458' }}>
            ultimo versamento 15 apr · +50 €
          </div>
        </div>

        <div className="sketchy-dashed" style={{ padding: '8px 10px', background: '#F5F2EA', textAlign: 'center', fontFamily: 'Caveat', fontSize: 16, color: '#6A6458' }}>
          + aggiungi un altro conto
        </div>
      </div>
    </SketchPhone>
  );
}

function C_Stats() {
  return (
    <SketchPhone label="C · Statistiche" sub="Report narrativo settimanale">
      <SketchTitleBar title="Questa settimana" back={false} right="⇣" />
      <div style={{ padding: '4px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="handwrite" style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2 }}>
          "Settimana di <span style={{ color: COLORS.pac.main }}>buone abitudini</span>."
        </div>

        <div className="sketchy" style={{ padding: 10, background: '#fff' }}>
          <div className="handwrite-body" style={{ fontSize: 12, lineHeight: 1.5 }}>
            Il PAC di aprile è <b>✓ versato</b>.<br/>
            Fumato <b>22 sigarette</b>, sotto la media.<br/>
            Zero eccessi con l'alcol.<br/>
            Zero spese di gioco.
          </div>
        </div>

        <div className="sketchy" style={{ padding: 10, background: COLORS.pac.bg }}>
          <div className="section-label" style={{ marginBottom: 4 }}>RISPARMI TOTALI</div>
          <div className="handwrite" style={{ fontSize: 26, fontWeight: 700, lineHeight: 1 }}>€ 4.470</div>
          <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458' }}>
            +250 € questo mese (200 PAC + 50 Revolut)
          </div>
          <SquiggleChart d="M0 55 Q 40 48, 80 40 T 160 25 T 260 10" color={COLORS.pac.main} w={260} h={55} fill />
        </div>

        <div>
          <div className="section-label" style={{ marginBottom: 6 }}>VIZI · GIORNO PER GIORNO</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {['lun 15','mar 16','mer 17','gio 18','ven 19','sab 20','dom 21'].map((d, i) => {
              const vals = [[1,1,1],[0,1,1],[1,1,1],[1,1,1],[0,0,1],[1,1,1],[1,1,1]][i];
              return (
                <div key={d} className="sketchy" style={{ padding: '5px 8px', background: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="handwrite-body" style={{ fontSize: 10, width: 46, color: '#6A6458' }}>{d}</span>
                  {['smoke', 'drink', 'bet'].map((c, j) => (
                    <div key={c} style={{
                      flex: 1, height: 16, borderRadius: 4,
                      border: '1.5px solid #1A1814',
                      background: vals[j] ? COLORS[c].main : '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Kalam', fontWeight: 700, fontSize: 10,
                      color: vals[j] ? '#F5F2EA' : '#1A1814',
                    }}>{vals[j] ? '✓' : '×'}</div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SketchPhone>
  );
}

function C_Settings() {
  return (
    <SketchPhone label="C · Impostazioni" sub="Il patto · obiettivi · conti">
      <SketchTitleBar title="Il nostro patto" back={false} />
      <div style={{ padding: '4px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>

        <div className="sketchy" style={{ padding: 11, background: '#F5F2EA' }}>
          <div className="handwrite" style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
            I miei risparmi
          </div>
          {[
            { c: 'pac', t: 'PAC mensile',        v: '200 € fissi' },
            { c: 'pac', t: 'Totale PAC',         v: '3.620 €' },
            { c: 'pac', t: 'Revolut',            v: '850 €' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '4px 0', borderBottom: '1px dashed #C8C2B1', gap: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: 7, background: COLORS[r.c].main, border: '1.5px solid #1A1814' }} />
              <span className="handwrite-body" style={{ fontSize: 11, flex: 1 }}>{r.t}</span>
              <span className="handwrite" style={{ fontSize: 14, fontWeight: 700 }}>{r.v}</span>
              <span style={{ fontFamily: 'Caveat', fontSize: 16, color: '#6A6458' }}>✎</span>
            </div>
          ))}
          <div className="handwrite-body" style={{ fontSize: 11, color: '#6A6458', padding: '6px 0 0', textAlign: 'center', fontStyle: 'italic' }}>
            + aggiungi un altro conto
          </div>
        </div>

        <div className="sketchy" style={{ padding: 11, background: '#F5F2EA' }}>
          <div className="handwrite" style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
            I miei limiti
          </div>
          {[
            { c: 'smoke', t: 'Fumo al massimo',    v: '5 al giorno' },
            { c: 'drink', t: 'Bevo al massimo',    v: '3 unità / sett.' },
            { c: 'bet',   t: 'Gioco d\u2019azzardo', v: 'mai.' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '4px 0', borderBottom: '1px dashed #C8C2B1', gap: 6 }}>
              <div style={{ width: 7, height: 7, borderRadius: 7, background: COLORS[r.c].main, border: '1.5px solid #1A1814' }} />
              <span className="handwrite-body" style={{ fontSize: 11, flex: 1 }}>{r.t}</span>
              <span className="handwrite" style={{ fontSize: 14, fontWeight: 700 }}>{r.v}</span>
            </div>
          ))}
        </div>

        <div className="sketchy" style={{ padding: 10, background: '#fff' }}>
          <div className="handwrite" style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>Come ti parlo</div>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {['gentile', 'neutra', 'severa', 'spietata'].map((t, i) => (
              <div key={t} className="tag" style={{
                fontSize: 11, padding: '2px 9px',
                background: i === 2 ? '#1A1814' : '#fff',
                color: i === 2 ? '#F5F2EA' : '#1A1814',
              }}>{t}</div>
            ))}
          </div>
        </div>

        <div className="sketchy" style={{ background: '#fff' }}>
          <SetRow label="Ora del diario" detail="21:30" toggle toggleOn />
          <SetRow label="Promemoria PAC" detail="1° del mese" toggle toggleOn />
          <SetRow label="Face ID" detail="" toggle toggleOn last />
        </div>
      </div>
    </SketchPhone>
  );
}

Object.assign(window, { ApproachC });
