import config from 'config';
import log from '../logger';
import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(config.get('dbUri') as string);

const connect = async () => {
  try {
    await sequelize.authenticate();
    log.info('Connection has been established successfully.');
  } catch (error) {
    log.error('Unable to connect to the database:', error);
  }
};

export default connect;
