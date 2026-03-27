import { useState } from "react";

const SLAVIA_RED = "#cc0000";
const ACCENT = "#e8001e";

const FLAGS = {
  "Czech Republic": "🇨🇿", "Czechia": "🇨🇿", "Slovakia": "🇸🇰", "Poland": "🇵🇱",
  "Germany": "🇩🇪", "France": "🇫🇷", "Spain": "🇪🇸", "Italy": "🇮🇹",
  "Portugal": "🇵🇹", "Brazil": "🇧🇷", "Argentina": "🇦🇷", "Nigeria": "🇳🇬",
  "Ghana": "🇬🇭", "Ivory Coast": "🇨🇮", "Côte d'Ivoire": "🇨🇮", "Senegal": "🇸🇳",
  "Morocco": "🇲🇦", "Serbia": "🇷🇸", "Croatia": "🇭🇷", "Slovenia": "🇸🇮",
  "Hungary": "🇭🇺", "Romania": "🇷🇴", "Ukraine": "🇺🇦", "Greece": "🇬🇷",
  "Netherlands": "🇳🇱", "Belgium": "🇧🇪", "Austria": "🇦🇹", "Denmark": "🇩🇰",
  "Guinea": "🇬🇳", "Cameroon": "🇨🇲", "Liberia": "🇱🇷", "Gambia": "🇬🇲",
  "Kosovo": "🇽🇰", "Albania": "🇦🇱", "Bulgaria": "🇧🇬", "Georgia": "🇬🇪",
};

function getFlag(nationality) {
  return FLAGS[nationality] || "🌍";
}

const POSITIONS = {
  "Goalkeeper": "Brankář",
  "Defender": "Obránce",
  "Midfielder": "Záložník",
  "Attacker": "Útočník",
};

const DEMO_PLAYERS = [
  { id: 1, name: "Tomáš Holeš", position: "Defender", age: 32, nationality: "Czech Republic", photo: "TH", photoUrl: null, number: 3, stats: { zapasy: 22, goly: 2, asistence: 3, strelba: 1.2, uspesnost_prihravek: 87, ziskana_micka: 7.2, souboje_vyhrane: 64, zlute_karty: 4, oceneni: 7.1 } },
  { id: 2, name: "Lukáš Provod", position: "Midfielder", age: 29, nationality: "Czech Republic", photo: "LP", photoUrl: null, number: 17, stats: { zapasy: 19, goly: 6, asistence: 5, strelba: 2.8, uspesnost_prihravek: 81, ziskana_micka: 4.1, souboje_vyhrane: 51, zlute_karty: 3, oceneni: 7.6 } },
  { id: 3, name: "Ivan Schranz", position: "Attacker", age: 32, nationality: "Slovakia", photo: "IS", photoUrl: null, number: 26, stats: { zapasy: 24, goly: 11, asistence: 6, strelba: 3.1, uspesnost_prihravek: 75, ziskana_micka: 2.3, souboje_vyhrane: 45, zlute_karty: 2, oceneni: 7.7 } },
];

function StatBar({ label, value, max, unit = "" }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{label}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{value}{unit}</span>
      </div>
      <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${ACCENT}aa, ${ACCENT})`, borderRadius: 2, transition: "width 0.8s cubic-bezier(0.34,1.56,0.64,1)" }} />
      </div>
    </div>
  );
}

function Spinner({ size = 16 }) {
  return <div style={{ width: size, height: size, border: `2px solid ${SLAVIA_RED}44`, borderTop: `2px solid ${SLAVIA_RED}`, borderRadius: "50%", animation: "spin 0.8s linear
cat > src/App.jsx << 'EOF'
import { useState } from "react";

const SLAVIA_RED = "#cc0000";
const ACCENT = "#e8001e";

const FLAGS = {
  "Czech Republic": "🇨🇿", "Czechia": "🇨🇿", "Slovakia": "🇸🇰", "Poland": "🇵🇱",
  "Germany": "🇩🇪", "France": "🇫🇷", "Spain": "🇪🇸", "Italy": "🇮🇹",
  "Portugal": "🇵🇹", "Brazil": "🇧🇷", "Argentina": "🇦🇷", "Nigeria": "🇳🇬",
  "Ghana": "🇬🇭", "Ivory Coast": "🇨🇮", "Côte d'Ivoire": "🇨🇮", "Senegal": "🇸🇳",
  "Morocco": "🇲🇦", "Serbia": "🇷🇸", "Croatia": "🇭🇷", "Slovenia": "🇸🇮",
  "Hungary": "🇭🇺", "Romania": "🇷🇴", "Ukraine": "🇺🇦", "Greece": "🇬🇷",
  "Netherlands": "🇳🇱", "Belgium": "🇧🇪", "Austria": "🇦🇹", "Denmark": "🇩🇰",
  "Guinea": "🇬🇳", "Cameroon": "🇨🇲", "Liberia": "🇱🇷", "Gambia": "🇬🇲",
  "Kosovo": "🇽🇰", "Albania": "🇦🇱", "Bulgaria": "🇧🇬", "Georgia": "🇬🇪",
};

function getFlag(nationality) {
  return FLAGS[nationality] || "🌍";
}

const POSITIONS = {
  "Goalkeeper": "Brankář",
  "Defender": "Obránce",
  "Midfielder": "Záložník",
  "Attacker": "Útočník",
};

const DEMO_PLAYERS = [
  { id: 1, name: "Tomáš Holeš", position: "Defender", age: 32, nationality: "Czech Republic", photo: "TH", photoUrl: null, number: 3, stats: { zapasy: 22, goly: 2, asistence: 3, strelba: 1.2, uspesnost_prihravek: 87, ziskana_micka: 7.2, souboje_vyhrane: 64, zlute_karty: 4, oceneni: 7.1 } },
  { id: 2, name: "Lukáš Provod", position: "Midfielder", age: 29, nationality: "Czech Republic", photo: "LP", photoUrl: null, number: 17, stats: { zapasy: 19, goly: 6, asistence: 5, strelba: 2.8, uspesnost_prihravek: 81, ziskana_micka: 4.1, souboje_vyhrane: 51, zlute_karty: 3, oceneni: 7.6 } },
  { id: 3, name: "Ivan Schranz", position: "Attacker", age: 32, nationality: "Slovakia", photo: "IS", photoUrl: null, number: 26, stats: { zapasy: 24, goly: 11, asistence: 6, strelba: 3.1, uspesnost_prihravek: 75, ziskana_micka: 2.3, souboje_vyhrane: 45, zlute_karty: 2, oceneni: 7.7 } },
];

function StatBar({ label, value, max, unit = "" }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{label}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{value}{unit}</span>
      </div>
      <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${ACCENT}aa, ${ACCENT})`, borderRadius: 2, transition: "width 0.8s cubic-bezier(0.34,1.56,0.64,1)" }} />
      </div>
    </div>
  );
}

function Spinner({ size = 16 }) {
  return <div style={{ width: size, height: size, border: `2px solid ${SLAVIA_RED}44`, borderTop: `2px solid ${SLAVIA_RED}`, borderRadius: "50%", animation: "spin 0.8s linear infinite", flexShrink: 0 }} />;
}

export default function App() {
  const [players, setPlayers] = useState(DEMO_PLAYERS);
  const [selected, setSelected] = useState(null);
  const [commentary, setCommentary] = useState("");
  const [loadingPlayers, setLoadingPlayers] = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);
  const [search, setSearch] = useState("");
  const [apiError, setApiError] = useState("");
  const [isDemo, setIsDemo] = useState(true);
  const [filter, setFilter] = useState("Vše");

  const positions = ["Vše", "Brankář", "Obránce", "Záložník", "Útočník"];

  const filtered = players.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchPos = filter === "Vše" || POSITIONS[p.position] === filter;
    return matchSearch && matchPos;
  });

  async function fetchPlayers() {
    setLoadingPlayers(true);
    setApiError("");
    try {
      const res = await fetch("/api/football");
      const data = await res.json();

      if (data.errors && Object.keys(data.errors).length > 0) {
        throw new Error(Object.values(data.errors).join(", "));
      }

      // squads endpoint vrací response[0].players
      const squad = data.response?.[0]?.players;
      if (!squad || squad.length === 0) throw new Error("Žádní hráči nenalezeni.");

      const mapped = squad.map(p => ({
        id: p.id,
        name: p.name,
        position: p.position,
        age: p.age,
        nationality: "",
        number: p.number,
        photo: p.name?.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase(),
        photoUrl: p.photo || null,
        stats: { zapasy: "—", goly: "—", asistence: "—", strelba: "—", uspesnost_prihravek: "—", ziskana_micka: "—", souboje_vyhrane: "—", zlute_karty: "—", oceneni: "—" },
      }));

      setPlayers(mapped);
      setIsDemo(false);
    } catch (e) {
      setApiError(e.message || "Chyba při načítání dat.");
      setIsDemo(true);
    }
    setLoadingPlayers(false);
  }

  async function generateCommentary(player) {
    setLoadingAI(true);
    setCommentary("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `Jsi fotbalový analytik specializující se na SK Slavia Praha. Napiš stručný, vtipný ale odborný komentář o herním stylu hráče na základě jeho pozice a věku. Piš česky, max 3 věty.

Hráč: ${player.name}
Pozice: ${POSITIONS[player.position] || player.position}
Věk: ${player.age}
Číslo dresu: ${player.number}

Napiš jen samotný komentář, bez uvozovek a nadpisu.`
          }],
        }),
      });
      const result = await res.json();
      setCommentary(result.content?.[0]?.text || "Nepodařilo se vygenerovat komentář.");
    } catch {
      setCommentary("Chyba při generování AI komentáře.");
    }
    setLoadingAI(false);
  }

  function selectPlayer(player) {
    setSelected(player);
    setCommentary("");
    generateCommentary(player);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0f", fontFamily: "'Outfit', 'Helvetica Neue', sans-serif", color: "#fff" }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } } @keyframes pulse { 0%,100%{opacity:0.3} 50%{opacity:0.7} } * { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }`}</style>

      <div style={{ background: "linear-gradient(135deg, #1a0000 0%, #0d0d0f 60%)", borderBottom: `1px solid ${SLAVIA_RED}33`, padding: "14px 24px", display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 38, height: 38, background: `linear-gradient(135deg, ${SLAVIA_RED}, #800000)`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, boxShadow: `0 4px 20px ${SLAVIA_RED}66`, flexShrink: 0 }}>⚽</div>
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: "-0.04em" }}>
            Slavia Praha <span style={{ color: SLAVIA_RED }}>Scout</span>
          </h1>
          <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            {isDemo ? "⚠️ Demo data" : `✅ Aktuální soupiska · ${players.length} hráčů`} · Sešívaní sobě
          </p>
        </div>
        <button onClick={fetchPlayers} disabled={loadingPlayers}
          style={{ padding: "9px 20px", background: `linear-gradient(135deg, ${SLAVIA_RED}, #800000)`, border: "none", borderRadius: 8, color: "#fff", fontSize: 13, fontWeight: 700, cursor: loadingPlayers ? "not-allowed" : "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 8, boxShadow: `0 4px 16px ${SLAVIA_RED}44` }}>
          {loadingPlayers ? <><Spinner /> Načítám...</> : "🔄 Načíst hráče"}
        </button>
      </div>

      {apiError && (
        <div style={{ background: `${SLAVIA_RED}15`, borderBottom: `1px solid ${SLAVIA_RED}25`, padding: "8px 24px", fontSize: 12, color: `${SLAVIA_RED}cc` }}>
          ⚠️ {apiError}
        </div>
      )}

      <div style={{ display: "flex", height: `calc(100vh - ${apiError ? 126 : 91}px)` }}>
        <div style={{ width: 265, borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", flexShrink: 0 }}>
          <div style={{ padding: "12px 12px 6px" }}>
            <input placeholder="🔍 Hledat hráče..." value={search} onChange={e => setSearch(e.target.value)}
              style={{ width: "100%", padding: "8px 12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff", fontSize: 12, fontFamily: "inherit", outline: "none" }} />
          </div>
          <div style={{ display: "flex", gap: 4, padding: "0 12px 8px", flexWrap: "wrap" }}>
            {positions.map(pos => (
              <button key={pos} onClick={() => setFilter(pos)}
                style={{ padding: "3px 8px", borderRadius: 6, border: `1px solid ${filter === pos ? SLAVIA_RED + "88" : "rgba(255,255,255,0.08)"}`, background: filter === pos ? `${SLAVIA_RED}22` : "transparent", color: filter === pos ? "#fff" : "rgba(255,255,255,0.35)", fontSize: 10, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" }}>
                {pos}
              </button>
            ))}
          </div>
          <div style={{ padding: "0 16px 8px", fontSize: 10, color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {isDemo ? "Demo hráči" : `${filtered.length} hráčů · SK Slavia Praha`}
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "0 8px 8px" }}>
            {loadingPlayers
              ? [...Array(10)].map((_, i) => <div key={i} style={{ height: 54, borderRadius: 10, background: "rgba(255,255,255,0.04)", marginBottom: 4, animation: "pulse 1.5s ease-in-out infinite", animationDelay: `${i * 0.07}s` }} />)
              : filtered.map(player => (
                <button key={player.id} onClick={() => selectPlayer(player)}
                  style={{ width: "100%", padding: "10px", marginBottom: 3, background: selected?.id === player.id ? `${SLAVIA_RED}22` : "transparent", border: `1px solid ${selected?.id === player.id ? SLAVIA_RED + "55" : "transparent"}`, borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, transition: "all 0.15s", textAlign: "left" }}
                  onMouseEnter={e => { if (selected?.id !== player.id) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                  onMouseLeave={e => { if (selected?.id !== player.id) e.currentTarget.style.background = "transparent"; }}
                >
                  {player.photoUrl
                    ? <img src={player.photoUrl} alt={player.name} style={{ width: 36, height: 36, borderRadius: 9, objectFit: "cover", flexShrink: 0 }} onError={e => e.target.style.display = "none"} />
                    : <div style={{ width: 36, height: 36, borderRadius: 9, flexShrink: 0, background: selected?.id === player.id ? `linear-gradient(135deg, ${SLAVIA_RED}, #800000)` : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{player.photo}</div>
                  }
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#fff" }}>
                      {getFlag(player.nationality)} {player.name}
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>{POSITIONS[player.position] || player.position}</div>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.2)", flexShrink: 0 }}>#{player.number}</div>
                </button>
              ))
            }
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>
          {!selected ? (
            <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.2)" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>⚽</div>
              <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 8, color: "rgba(255,255,255,0.3)" }}>Vyber hráče vlevo</div>
              <div style={{ fontSize: 13 }}>AI vygeneruje analýzu herního stylu v češtině</div>
            </div>
          ) : (
            <div style={{ maxWidth: 620 }}>
              <div style={{ background: `linear-gradient(135deg, ${SLAVIA_RED}18, rgba(255,255,255,0.03))`, border: `1px solid ${SLAVIA_RED}33`, borderRadius: 16, padding: 20, marginBottom: 16, display: "flex", alignItems: "center", gap: 18 }}>
                {selected.photoUrl
                  ? <img src={selected.photoUrl} alt={selected.name} style={{ width: 68, height: 68, borderRadius: 14, objectFit: "cover", flexShrink: 0, boxShadow: `0 8px 32px ${SLAVIA_RED}44` }} />
                  : <div style={{ width: 68, height: 68, borderRadius: 14, flexShrink: 0, background: `linear-gradient(135deg, ${SLAVIA_RED}, #800000)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, boxShadow: `0 8px 32px ${SLAVIA_RED}44` }}>{selected.photo}</div>
                }
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 8 }}>
                    {getFlag(selected.nationality)} {selected.name}
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {[POSITIONS[selected.position] || selected.position, `${selected.age} let`, `#${selected.number}`].map(tag => (
                      <span key={tag} style={{ fontSize: 11, padding: "3px 10px", background: "rgba(255,255,255,0.08)", borderRadius: 20, color: "rgba(255,255,255,0.6)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 26, height: 26, background: `linear-gradient(135deg, ${SLAVIA_RED}, #800000)`, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>🤖</div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>AI Analýza</span>
                </div>
                {loadingAI
                  ? <div style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.4)" }}><Spinner /><span style={{ fontSize: 13 }}>Generuji analýzu...</span></div>
                  : <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.85)", fontStyle: "italic", borderLeft: `3px solid ${SLAVIA_RED}`, paddingLeft: 16 }}>{commentary}</p>
                }
                {!loadingAI && commentary && (
                  <button onClick={() => generateCommentary(selected)} style={{ marginTop: 12, padding: "5px 12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, color: "rgba(255,255,255,0.4)", fontSize: 11, cursor: "pointer", fontFamily: "inherit" }}>
                    🔄 Vygenerovat znovu
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
