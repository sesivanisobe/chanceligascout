export default async (req, context) => {
  const apiKey = Netlify.env.get("FOOTBALL_API_KEY");
  const headers = { "x-apisports-key": apiKey };
  const base = "https://v3.football.api-sports.io";

  // 1. Aktuální soupiska
  const squadRes = await fetch(`${base}/players/squads?team=560`, { headers });
  const squadData = await squadRes.json();
  const squad = squadData.response?.[0]?.players || [];
  const squadIds = new Set(squad.map(p => p.id));

  // 2. Statistiky hráčů za sezónu (stránky 1 a 2)
  const [s1, s2] = await Promise.all([
    fetch(`${base}/players?team=560&season=2024&page=1`, { headers }).then(r => r.json()),
    fetch(`${base}/players?team=560&season=2024&page=2`, { headers }).then(r => r.json()),
  ]);

  const statsMap = {};
  [...(s1.response || []), ...(s2.response || [])].forEach(item => {
    statsMap[item.player.id] = item;
  });

  // 3. Merge - jen hráči v aktuální soupisce
  const merged = squad.map(p => {
    const statsItem = statsMap[p.id];
    const player = statsItem?.player || {};
    const stats = statsItem?.statistics?.[0] || {};
    const games = stats.games || {};
    const goals = stats.goals || {};
    const passes = stats.passes || {};
    const tackles = stats.tackles || {};
    const cards = stats.cards || {};
    const shots = stats.shots || {};
    const apps = Math.max(games.appearences || 1, 1);

    return {
      id: p.id,
      name: p.name,
      age: p.age,
      number: p.number,
      position: p.position,
      photo: p.photo,
      nationality: player.nationality || "",
      stats: {
        zapasy: games.appearences || 0,
        goly: goals.total || 0,
        asistence: goals.assists || 0,
        strelba: shots.on ? +((shots.on) / apps).toFixed(1) : 0,
        uspesnost_prihravek: passes.accuracy || 0,
        ziskana_micka: tackles.interceptions ? +(tackles.interceptions / apps).toFixed(1) : 0,
        souboje_vyhrane: tackles.total || 0,
        zlute_karty: cards.yellow || 0,
        oceneni: games.rating ? +parseFloat(games.rating).toFixed(1) : "—",
      },
    };
  });

  return new Response(JSON.stringify({ response: merged }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
};

export const config = {
  path: "/api/football",
};
