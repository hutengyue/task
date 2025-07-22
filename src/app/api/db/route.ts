import { NextResponse } from 'next/server';
import { AppDataSource } from '@/lib/db/config';

let initialized = false;

export async function GET() {
  if (initialized) {
    return NextResponse.json({ status: 'ok', message: 'Database already initialized' });
  }

  try {
    await AppDataSource.initialize();
    initialized = true;
    return NextResponse.json({ status: 'ok', message: 'Database initialized successfully' });
  } catch (error) {
    console.error('Error initializing database:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to initialize database' },
      { status: 500 }
    );
  }
}