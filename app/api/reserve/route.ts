import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'Solar Reserve API ready',
    timestamp: new Date().toISOString()
  });
}
