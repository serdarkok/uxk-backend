import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from './item.model';
import { Location } from '../location/location.model';
import { Category } from '../category/category.model';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item)
    private itemModel: typeof Item,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemModel.create({
      ...createItemDto,
      status: createItemDto.status ?? true,
    });
  }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.findAll({
      include: [
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
      ],
    });
  }

  async findOne(id: number): Promise<Item> {
    const item = await this.itemModel.findByPk(id, {
      include: [
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
      ],
    });
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    const item = await this.findOne(id);
    await item.update(updateItemDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await item.destroy();
  }

  async findActive(): Promise<Item[]> {
    return await this.itemModel.findAll({
      where: { status: true },
      include: [
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
      ],
    });
  }

  async findByLocation(locationId: number): Promise<Item[]> {
    return await this.itemModel.findAll({
      where: { locationId },
      include: [
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
      ],
    });
  }

  async findByCategory(categoryId: number): Promise<Item[]> {
    return await this.itemModel.findAll({
      where: { categoryId },
      include: [
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
      ],
    });
  }
}
