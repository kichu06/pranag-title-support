import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    console.log('[Contact API] Received submission:', JSON.stringify(payload, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: 'Contact request received. Our team will reach out shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API] Error processing request:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to process the contact request at this time. Please try again later.',
      },
      { status: 500 }
    );
  }
}
