import { DataSource } from 'typeorm';
import { migration1663236009774 } from './migrations/1663236009774-migration';

export const dataSource = new DataSource({
  type: 'postgres',
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  port: Number(process.env.DATABASE_PORT),
  synchronize: process.env.NODE_ENV !== 'production',
  url: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  entities: [`${__dirname}/entities/*.entity.{ts,js}`],
  migrations: [migration1663236009774],
});
