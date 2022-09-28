import { DataSource } from 'typeorm';
import { migration1663236009774 } from './migrations/1663236009774-migration';
import getDataSourceConfig from './data-source.config';

export const dataSource = new DataSource(getDataSourceConfig());
