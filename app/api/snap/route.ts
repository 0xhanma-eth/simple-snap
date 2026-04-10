import { NextRequest, NextResponse } from "next/server";

function renderScreen(count: number) {
  return {
    version: "1",
    screen: {
      title: "My First Snap",
      elements: [
        {
          type: "text",
          text: "👋 Halo Farcaster!",
        },
        {
          type: "text",
          text: `Count: ${count}`,
        },
        {
          type: "button",
          label: "Tambah +1",
          action: {
            type: "post",
            path: "/api/snap",
            payload: {
              count: count + 1,
            },
          },
        },
      ],
    },
  };
}

export async function GET() {
  return NextResponse.json(renderScreen(0));
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const count = Number(body?.count ?? 0);

  return NextResponse.json(renderScreen(count));
}