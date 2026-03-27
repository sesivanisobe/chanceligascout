export default async (req, context) => {
  const apiKey = Netlify.env.get("FOOTBALL_API_KEY");
  const apiUrl = `https://v3.football.api-sports.io/players?team=394&season=2024&page=1`;

  const response = await fetch(apiUrl, {
    headers: { "x-apisports-key": apiKey },
  });
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
};

export const config = {
  path: "/api/football",
};
