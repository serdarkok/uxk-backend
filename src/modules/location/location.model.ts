import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface LocationAttributes {
  id?: number;
  name: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface LocationCreationAttributes {
  name: string;
  status?: boolean;
}

@Table({
  tableName: 'locations',
  timestamps: true,
})
export class Location extends Model<LocationAttributes, LocationCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  declare status: boolean;

  declare createdAt: Date;
  declare updatedAt: Date;
}
