import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Item } from './item.model';
import { Location } from '../location/location.model';
import { Category } from '../category/category.model';

@Module({
  imports: [SequelizeModule.forFeature([Item, Location, Category])],
  controllers: [ItemController],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
