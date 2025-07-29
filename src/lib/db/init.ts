import { AppDataSource } from './config';

let initialized = false;

export async function initializeDatabase() {
  if (initialized) {
    return;
  }

  try {
    await AppDataSource.initialize();
    initialized = true;
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}