export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    success: true,
    message: 'Export generated',
    data: {
      fileName: 'meeting-summary.docx',
      type: 'docx'
    }
  });
}
