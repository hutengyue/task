import 'reflect-metadata';
import { AppDataSource } from './config';
export * from './entities';
export { AppDataSource };

let initialized = false;

export async function initDatabaseOnServer() {
  if (typeof window !== 'undefined' || initialized) {
    return;
  }

  try {
    await AppDataSource.initialize();
    initialized = true;
    console.log('Database connection initialized');
  } catch (error) {
    console.error('Error initializing database connection:', error);
    throw error;
  }
}