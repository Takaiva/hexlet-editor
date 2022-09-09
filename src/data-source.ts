import { DataSource } from 'typeorm';
import { snippets1662489659089 } from './migrations/1662489659089-snippets';

export const dataSource = new DataSource({
  type: 'postgres',
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  url: process.env.DATABASE_URL,
  port: process.env.DATABASE_PORT,
  ssl: { rejectUnauthorized: false },
  entities: [`${__dirname}/snippets/*.entity.{ts,js}`],
  migrations: [snippets1662489659089],
});
