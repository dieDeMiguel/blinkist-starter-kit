import { NextResponse } from 'next/server';

export async function GET() {
  // Get the BASE_URL from the server-side environment
  const baseUrl = process.env.BASE_URL || "";
  
  // Return it as JSON
  return NextResponse.json({ baseUrl });
} 