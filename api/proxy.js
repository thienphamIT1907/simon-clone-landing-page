export default async function handler(req, res) {
  const targetUrl =
    `${process.env.VITE_SIMON_BACKEND_ENDPOINT}/message-center/landing-page` ||
    `http://localhost:3000/message-center/landing-page`;

  const response = await fetch(targetUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
  });

  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.status(response.status).json(data);
}
