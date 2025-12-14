import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShipService } from './ship.service';
import { ShipController } from './ship.controller';
import { Ship } from './ship.model';
import { Item } from '../item/item.model';
import { Location } from '../location/location.model';
import { Category } from '../category/category.model';
import { Vendor } from '../vendor/vendor.model';

@Module({
  imports: [SequelizeModule.forFeature([Ship, Item, Location, Category, Vendor])],
  controllers: [ShipController],
  providers: [ShipService],
  exports: [ShipService],
})
export class ShipModule {}
