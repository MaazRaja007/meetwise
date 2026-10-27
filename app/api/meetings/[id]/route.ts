export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { mockMeetings } from '@/lib/mock-data';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const meeting = mockMeetings.find((item) => item.id === params.id);

  if (!meeting) {
    return NextResponse.json({ success: false, error: 'Meeting not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: meeting });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({
    success: true,
    message: `Meeting ${params.id} deleted successfully`,
    deletedId: params.id
  });
}
