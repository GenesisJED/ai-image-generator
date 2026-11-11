import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || !prompt.trim()) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const url = new URL("https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt.trim()));
    url.searchParams.set("width", "1024");
    url.searchParams.set("height", "1024");
    url.searchParams.set("model", "flux");
    url.searchParams.set("nologo", "true");

    const response = await fetch(url.toString(), {
      method: "GET",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Pollinations API error:", response.status, errorText);
      return NextResponse.json(
        { error: `Image generation API error: ${response.status}` },
        { status: response.status }
      );
    }

    const imageBuffer = await response.arrayBuffer();
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  } catch (error) {
    console.error("Error in generate-image route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
