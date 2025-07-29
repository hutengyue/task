import { NextResponse } from 'next/server';
import { initializeDatabase } from '@/lib/db/init';

export async function GET() {
  try {
    await initializeDatabase();
    return NextResponse.json({ status: 'ok', message: 'Database initialized successfully' });
  } catch (error) {
    console.error('Error initializing database:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to initialize database' },
      { status: 500 }
    );
  }
}