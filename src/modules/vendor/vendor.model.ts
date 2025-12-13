import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface VendorAttributes {
  id?: number;
  name: string;
  address?: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface VendorCreationAttributes {
  name: string;
  address?: string;
  status?: boolean;
}

@Table({
  tableName: 'vendors',
  timestamps: true,
})
export class Vendor extends Model<VendorAttributes, VendorCreationAttributes> {
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
    type: DataType.STRING,
    allowNull: true,
  })
  declare address: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  declare status: boolean;

  declare createdAt: Date;
  declare updatedAt: Date;
}
