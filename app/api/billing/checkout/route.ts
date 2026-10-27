export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    success: true,
    message: 'Checkout session created',
    data: {
      url: 'https://checkout.stripe.com/mock_session'
    }
  });
}
