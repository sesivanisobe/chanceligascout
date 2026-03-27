export default async (req, context) => {
  const url = new URL(req.url);
  const path = url.searchParams.get("path") || "players/topscorers";
  const query = url.searchParams.get("query") || "";

  const apiKey = Netlify.env.get("FOOTBALL_API_KEY");

  const apiUrl = `https://v3.football.api-sports.io/${path}?${query}`;

  const response = await fetch(apiUrl, {
    headers: {
      "x-apisports-key": apiKey,
    },
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const config = {
  path: "/api/football",
};
