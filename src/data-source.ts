import { DataSource } from 'typeorm';
import { snippets1662489659089 } from './migrations/1662489659089-snippets';

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_URL,
  port: 5432,
  username: 'timyr',
  password: '1234',
  database: 'postgres',
  entities: [`${__dirname}/snippets/*.entity.{ts,js}`],
  migrations: [snippets1662489659089],
});
