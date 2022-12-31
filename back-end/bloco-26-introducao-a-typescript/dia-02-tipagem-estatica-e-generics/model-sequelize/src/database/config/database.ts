import 'dotenv/config';
import { Options } from 'sequelize'; // assegura que os attr de config respeitarão os padrões utilizados no momento da inicialização do sequelize na api

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  database: process.env.DB_NAME || 'books_api',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
};

export = config;