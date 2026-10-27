export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    success: true,
    message: 'Portal session created',
    data: {
      url: 'https://billing.stripe.com/mock_portal'
    }
  });
}
