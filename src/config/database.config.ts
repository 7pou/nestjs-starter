import { ConfigType, registerAs } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/modules/**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/*.{js,ts}'],
  subscribers: ['dist/subscribers/**/*.{js,ts}'],
  connectorPackage: 'mysql2',
  synchronize: process.env.NODE_ENV !== 'production',
};

export const databaseConfigKey = 'database';

export const DatabaseConfig = registerAs(
  databaseConfigKey,
  () => dataSourceOptions,
);

export type IDataSourceConfig = ConfigType<typeof DatabaseConfig>;

export const AppDataSource = new DataSource(dataSourceOptions);

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed');
    throw error;
  }
};
