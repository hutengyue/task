import { DataSource } from 'typeorm';
import { Project, Task, Team, User } from './entities';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '565656',
  database: process.env.DB_DATABASE || 'task_management',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
  entities: [User, Project, Task, Team],
  migrations: [],
  subscribers: [],
});