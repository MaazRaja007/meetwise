export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { mockMeetings } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockMeetings,
    meta: {
      count: mockMeetings.length,
      source: 'mock-data'
    }
  });
}

export async function POST(req: Request) {
  const payload = await req.json();

  return NextResponse.json({
    success: true,
    message: 'Meeting created successfully',
    data: {
      id: `meeting_${Date.now()}`,
      ...payload,
      status: 'uploaded',
      source: 'upload'
    }
  });
}
