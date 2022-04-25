import * as dotenv from 'dotenv';

dotenv.config();

export default {
  port: 1337,
  host: 'localhost',
  dbUri: process.env.POSTGRES_URL
}