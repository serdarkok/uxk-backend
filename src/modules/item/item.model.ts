import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Location } from '../location/location.model';
import { Category } from '../category/category.model';

interface ItemAttributes {
  id?: number;
  name: string;
  description?: string;
  spec?: string;
  price: number;
  markup: number;
  unit: string;
  locationId: number;
  categoryId: number;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ItemCreationAttributes {
  name: string;
  description?: string;
  spec?: string;
  price: number;
  markup: number;
  unit: string;
  locationId: number;
  categoryId: number;
  status?: boolean;
}

@Table({
  tableName: 'items',
  timestamps: true,
})
export class Item extends Model<ItemAttributes, ItemCreationAttributes> {
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
    type: DataType.TEXT,
    allowNull: true,
  })
  declare description: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare spec: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  declare price: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  declare markup: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare unit: string;

  @BelongsTo(() => Location)
  declare location: Location;

  @BelongsTo(() => Category)
  declare category: Category;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare locationId: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare categoryId: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  declare status: boolean;

  declare createdAt: Date;
  declare updatedAt: Date;
}
