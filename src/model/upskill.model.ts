import { sequelize } from '../db'
import { Model, DataTypes, BuildOptions } from 'sequelize';

interface Upskill extends Model {
  _id: string;
  title: string;
  categories: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

type UpskillStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Upskill;
}

const DefineUpskill = <UpskillStatic>sequelize.define('upskill_categories',
  {
    _id: {
      primaryKey: true,
      type:  DataTypes.UUID,
    },
    title: {
      type: DataTypes.STRING,
    },
    categories: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    freezeTableName: true
  }
);

export default DefineUpskill;