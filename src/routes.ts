import { Express } from 'express';
import { findUpskillHandler } from './controller/upskill.controller';

export default function (app: Express) {
  app.get('/api/upskill', findUpskillHandler);
}