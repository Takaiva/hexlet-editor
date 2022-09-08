import { DataSource } from 'typeorm';
import { snippets1662489659089 } from './migrations/1662489659089-snippets';

export const dataSource = new DataSource({
  type: 'postgres',
  username: 'postgres',
  password: 'postgres',
  url: process.env.DATABASE_URL,
  port: 5432,
  ssl: { rejectUnauthorized: false },
  entities: [`${__dirname}/snippets/*.entity.{ts,js}`],
  migrations: [snippets1662489659089],
});
