export default async function handler(req, res) {
  const BASE_URL =
    `${process.env.VITE_SIMON_BACKEND_ENDPOINT}/message-center/landing-page` ||
    `http://localhost:3000/message-center/landing-page`;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    res.status(response.status).json(data);

    console.log({ statusNe: response.status });
  } catch (error) {
    console.log({ error });
  }
}
