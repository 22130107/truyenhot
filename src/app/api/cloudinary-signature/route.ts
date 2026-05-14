import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET() {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!apiSecret) {
      return NextResponse.json({ error: 'Missing Cloudinary API Secret' }, { status: 500 });
    }

    const signatureStr = `timestamp=${timestamp}${apiSecret}`;
    const signature = crypto.createHash('sha1').update(signatureStr).digest('hex');

    return NextResponse.json({
      timestamp,
      signature,
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    });
  } catch (error) {
    console.error('Error generating signature:', error);
    return NextResponse.json({ error: 'Failed to generate signature' }, { status: 500 });
  }
}
