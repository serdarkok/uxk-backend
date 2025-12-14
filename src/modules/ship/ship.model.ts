import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Item } from '../item/item.model';
import { Location } from '../location/location.model';
import { Category } from '../category/category.model';
import { Vendor } from '../vendor/vendor.model';

interface ShipAttributes {
  id?: number;
  itemId: number;
  shipToTitle?: string;
  shipToAddress?: string;
  shipFrom?: string;
  vendorId?: number;
  quantity?: number;
  phase?: number;
  notes?: string;
  locationId?: number;
  categoryId?: number;
  poApproval?: Date;
  hotelNeedBy?: Date;
  exceptedDelivery?: Date;
  shopsSend?: Date;
  shopsApproved?: Date;
  shopsDelivered?: Date;
  ordered?: Date;
  shipped?: Date;
  delivered?: Date;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ShipCreationAttributes {
  itemId: number;
  shipToTitle?: string;
  shipToAddress?: string;
  shipFrom?: string;
  vendorId?: number;
  quantity?: number;
  phase?: number;
  notes?: string;
  locationId?: number;
  categoryId?: number;
  poApproval?: Date;
  hotelNeedBy?: Date;
  exceptedDelivery?: Date;
  shopsSend?: Date;
  shopsApproved?: Date;
  shopsDelivered?: Date;
  ordered?: Date;
  shipped?: Date;
  delivered?: Date;
  status?: boolean;
}

@Table({
  tableName: 'shipping',
  timestamps: true,
})
export class Ship extends Model<ShipAttributes, ShipCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  declare id: number;

  @ForeignKey(() => Item)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'item',
  })
  declare itemId: number;

  @BelongsTo(() => Item)
  declare item: Item;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'ship_to_title',
  })
  declare shipToTitle: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'ship_to_address',
  })
  declare shipToAddress: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: 'ship_from',
  })
  declare shipFrom: string;

  @ForeignKey(() => Vendor)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: 'vendor',
  })
  declare vendorId: number;

  @BelongsTo(() => Vendor)
  declare vendor: Vendor;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare phase: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare notes: string;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: 'location',
  })
  declare locationId: number;

  @BelongsTo(() => Location)
  declare location: Location;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: 'category',
  })
  declare categoryId: number;

  @BelongsTo(() => Category)
  declare category: Category;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    field: 'po_approval',
  })
  declare poApproval: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    field: 'hotel_need_by',
  })
  declare hotelNeedBy: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    field: 'excepted_delivery',
  })
  declare exceptedDelivery: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    field: 'shops_send',
  })
  declare shopsSend: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    field: 'shops_approved',
  })
  declare shopsApproved: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    field: 'shops_delivered',
  })
  declare shopsDelivered: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  declare ordered: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  declare shipped: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  declare delivered: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  declare status: boolean;

  declare createdAt: Date;
  declare updatedAt: Date;
}
