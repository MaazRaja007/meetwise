export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const payload = await req.json();

  return NextResponse.json({
    success: true,
    message: 'Recording ready webhook received',
    data: {
      recordingId: payload.recordingId || 'recording_demo_123',
      status: 'ready'
    }
  });
}
