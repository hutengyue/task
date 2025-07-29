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
  // 连接池配置
  extra: {
    connectionLimit: 10,
    queueLimit: 0,
    waitForConnections: true
  },
  // 查询缓存配置
  cache: {
    duration: 60000, // 缓存持续时间，单位毫秒
    type: "database",
    options: {
      max: 100 // 最大缓存条目数
    }
  }
});