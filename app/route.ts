export async function POST(req: Request) {
  try {
    const data = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbz0yQMvHH4T_tw7zEhxKUXSx8Mt2BFbs0jxn5vaQDhAbua6CeH_cXcBpGQDAXZ1Glxo/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      }
    );

    const text = await response.text();

    return new Response(text, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API route error:", error);
    return new Response(
      JSON.stringify({ status: "error", message: "Failed to submit form" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
