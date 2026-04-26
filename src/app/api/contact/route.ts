import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_API = "https://api.telegram.org";

function escapeMarkdown(text: string): string {
  // Escape special characters for MarkdownV2
  return text.replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, "\\$&");
}

export async function POST(req: NextRequest) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  if (
    typeof body !== "object" ||
    body === null ||
    typeof (body as Record<string, unknown>).name !== "string" ||
    typeof (body as Record<string, unknown>).phone !== "string" ||
    typeof (body as Record<string, unknown>).message !== "string"
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const { name, phone, message } = body as {
    name: string;
    phone: string;
    message: string;
  };

  const safeName = name.trim().slice(0, 200);
  const safePhone = phone.trim().slice(0, 50);
  const safeMessage = message.trim().slice(0, 2000);

  if (!safeName || !safePhone || !safeMessage) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  const text =
    `📩 *Mesaj nou de contact*\n\n` +
    `👤 *Nume:* ${escapeMarkdown(safeName)}\n` +
    `📞 *Telefon:* ${escapeMarkdown(safePhone)}\n` +
    `💬 *Mesaj:*\n${escapeMarkdown(safeMessage)}`;

  const telegramRes = await fetch(
    `${TELEGRAM_API}/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "MarkdownV2",
      }),
    },
  );

  if (!telegramRes.ok) {
    const err = await telegramRes.text();
    console.error("Telegram API error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
