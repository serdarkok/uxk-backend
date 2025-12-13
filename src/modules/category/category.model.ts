import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface CategoryAttributes {
  id?: number;
  name: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CategoryCreationAttributes {
  name: string;
  status?: boolean;
}

@Table({
  tableName: 'categories',
  timestamps: true,
})
export class Category extends Model<CategoryAttributes, CategoryCreationAttributes> {
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
