// app/api/completion/route.ts
import Anthropic from "@anthropic-ai/sdk";
import { AnthropicStream, StreamingTextResponse } from "ai";
import { isSupportedImageType } from "@/app/utils";

export async function POST(req: Request) {
  const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

  if (!anthropicApiKey) {
    return new Response("Anthropic API key not set", { status: 500 });
  }

  const anthropic = new Anthropic({ apiKey: anthropicApiKey });

  const { prompt } = await req.json();

  // roughly 4.5MB in base64
  if (prompt.length > 6_464_471) {
    return new Response("Image too large, maximum file size is 4.5MB.", {
      status: 400,
    });
  }

  const { type, data } = decodeBase64Image(prompt);

  if (!type || !data)
    return new Response("Invalid image data", { status: 400 });

  if (!isSupportedImageType(type)) {
    return new Response(
      "Unsupported format. Only JPEG, PNG, GIF, and WEBP files are supported.",
      { status: 400 }
    );
  }

  const response = await anthropic.messages.create({
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Begin each of the following with a triangle symbol (▲ U+25B2): First, a brief description of the image to be used as alt text. Do not describe or extract text in the description. Second, the text extracted from the image, with newlines where applicable. Un-obstruct text if it is covered by something, to make it readable. Do not omit relevant text. If given a tweet, output the subtweets and comments as well. If there is no text in the image, only respond with the description. Do not include any other information. Example: ▲ Lines of code in a text editor.▲ const x = 5; const y = 10; const z = x + y; console.log(z);",
          },
          {
            type: "image",
            source: {
              type: "base64",
              media_type: type,
              data,
            },
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: "▲",
          },
        ],
      },
    ],
    model: "claude-3-haiku-20240307",
    stream: true,
    max_tokens: 500,
  });

  const stream = AnthropicStream(response);
  return new StreamingTextResponse(stream);
}

function decodeBase64Image(dataString: string) {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

  return {
    type: matches?.[1],
    data: matches?.[2],
  };
}