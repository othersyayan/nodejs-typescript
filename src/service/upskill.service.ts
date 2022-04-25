import log from '../logger';
import DefineUpskill from '../model/upskill.model';

export async function viewUpskillData() {
  try {
    const upskillData = await DefineUpskill.findAll();
    return upskillData;
  } catch (error) {
    log.error(error);
  }
}