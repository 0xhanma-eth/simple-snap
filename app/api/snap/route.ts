import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    version: "1",
    screen: {
      title: "My First Snap",
      elements: [
        {
          type: "text",
          text: "🚀 Snap is live!",
        },
      ],
    },
  });
}

export async function POST() {
  return NextResponse.json({
    ok: true,
  });
}