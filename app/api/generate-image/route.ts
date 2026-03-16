import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || !prompt.trim()) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const token = process.env.HUGGINGFACE_API_TOKEN;

    if (!token) {
      return NextResponse.json({ error: "API token not configured" }, { status: 500 });
    }

    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("HuggingFace API error:", response.status, errorText);
      return NextResponse.json(
        { error: `HuggingFace API error: ${response.status}` },
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
