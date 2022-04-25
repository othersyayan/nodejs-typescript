import { Request, Response } from 'express';
import { viewUpskillData } from '../service/upskill.service';
import log from '../logger';

export async function findUpskillHandler(req: Request, res: Response) {
  try {
    const upskillData = await viewUpskillData();
    return res.status(200).json(upskillData);
  } catch (error) {
    return res.status(500).send(error);
  }
}