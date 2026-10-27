export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const payload = await req.json();

  return NextResponse.json({
    success: true,
    message: 'Live meeting room created',
    data: {
      roomId: payload.roomId || 'room_demo_123',
      provider: 'livekit',
      joinUrl: 'https://meetwise.app/room/demo-room',
      status: 'in_progress'
    }
  });
}
