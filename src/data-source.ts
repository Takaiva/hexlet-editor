import { DataSource } from 'typeorm';
import { snippets1662489659089 } from './migrations/1662489659089-snippets';

export const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // host: process.env.DATABASE_URL,
  port: 5432,
  username: 'postgres',
  //  password: '1234',
  //  database: 'postgres',
  ssl: { rejectUnauthorized: false },
  entities: [`${__dirname}/snippets/*.entity.{ts,js}`],
  migrations: [snippets1662489659089],
});
