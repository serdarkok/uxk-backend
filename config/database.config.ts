import { Dialect } from 'sequelize';

interface ISequelizeConfig {
  [key: string]: {
    dialect: Dialect;
    username: string,
    password: string,
    database: string,
    host: string,
    port: number,
  };
}

const config: ISequelizeConfig = {
  development: {
    dialect: 'postgres',
    username: process.env.DATABASE_USER ?? 'postgres',
    password: process.env.DATABASE_PASSWORD ?? '123456',
    database: process.env.DATABASE_NAME ?? 'shipping',
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: parseInt(process.env.DATABASE_PORT ?? '5432'),
  },
  test: {
    dialect: 'postgres',
    username: process.env.DATABASE_USER ?? 'postgres',
    password: process.env.DATABASE_PASSWORD ?? '123456',
    database: process.env.DATABASE_NAME ?? 'shipping',
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: parseInt(process.env.DATABASE_PORT ?? '5432'),
  },
  production: {
    dialect: 'postgres',
    username: process.env.DATABASE_USER ?? 'postgres',
    password: process.env.DATABASE_PASSWORD ?? '123456',
    database: process.env.DATABASE_NAME ?? 'shipping',
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: parseInt(process.env.DATABASE_PORT ?? '5432'),
  },
};

export = config;