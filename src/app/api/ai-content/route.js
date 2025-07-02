// /app/api/ai-content/route.js
export async function POST(req) {
  const {
    text,
    customInstructions = "",
    contentGen = false,
  } = await req.json();

  let basePrompt = contentGen
    ? `You are a senior and experienced content writer... ${text}... ${customInstructions}`
    : `You are a senior content reviewer... ${text}... ${customInstructions}`;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
           model: "openai/gpt-4.1",
          messages: [{ role: "user", content: basePrompt }],
          max_tokens: contentGen ? 1700 : 600,
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      return new Response(errText, { status: response.status });
    }

    const data = await response.json();
    return Response.json({ content: data.choices[0].message.content });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
