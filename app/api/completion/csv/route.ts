// app/api/completion/route.ts
import Anthropic from "@anthropic-ai/sdk";
import { AnthropicStream, StreamingTextResponse } from "ai";
import { isSupportedImageType, isSupportedCSVType, isSupportedJSONType } from "@/app/utils";

export async function POST(req: Request) {
  const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

  if (!anthropicApiKey) {
    return new Response("Anthropic API key not set", { status: 500 });
  }

  const anthropic = new Anthropic({ apiKey: anthropicApiKey });

  const { prompt, fileType, customPrompt } = await req.json();

  // Check file size limit
  if (prompt.length > 6_464_471) {
    return new Response("File too large, maximum file size is 4.5MB.", {
      status: 400,
    });
  }

  // Decode file data
  const { type, data } = decodeBase64File(prompt, fileType);

  if (!type || !data)
    return new Response("Invalid file data", { status: 400 });

  if (
    (fileType === "image" && !isSupportedImageType(type)) ||
    (fileType === "csv" && !isSupportedCSVType(type)) ||
    (fileType === "json" && !isSupportedJSONType(type))
  ) {
    return new Response(
      "Unsupported format. Only CSV, JSON, JPEG, PNG, GIF, and WEBP files are supported.",
      { status: 400 }
    );
  }

  // Generate the prompt based on the file type and custom prompt
  const promptContent = generatePrompt(type, data, fileType, customPrompt);

  const response = await anthropic.messages.create({
    messages: [
      {
        role: "user",
        content: promptContent,
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

function decodeBase64File(dataString: string, fileType: string) {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

  return {
    type: matches?.[1],
    data: matches?.[2],
  };
}

function generatePrompt(
  type: string,
  data: string,
  fileType: string,
  customPrompt: string
) {
  let promptContent = "";

  if (fileType === "csv") {
    promptContent = `${customPrompt}\n\n▲ CSV file contents:\n${data}`;
  } else if (fileType === "json") {
    promptContent = `${customPrompt}\n\n▲ JSON file contents:\n${data}`;
  } else {
    promptContent = [
      `${customPrompt}`,
      "▲",
      `${type === "image/jpeg" ? "JPEG" : type === "image/png" ? "PNG" : type === "image/gif" ? "GIF" : "WEBP"} image contents:`,
      data,
    ].join("\n");
  }

  return promptContent;
}