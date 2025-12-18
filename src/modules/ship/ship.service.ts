import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Ship } from './ship.model';
import { Item } from '../item/item.model';
import { Location } from '../location/location.model';
import { Category } from '../category/category.model';
import { Vendor } from '../vendor/vendor.model';
import { CreateShipDto } from './dto/create-ship.dto';
import { UpdateShipDto } from './dto/update-ship.dto';
import { BulkUpdateShipDto } from './dto/bulk-update-ship.dto';

@Injectable()
export class ShipService {
  constructor(
    @InjectModel(Ship)
    private shipModel: typeof Ship,
  ) {}

  async create(createShipDto: CreateShipDto): Promise<Ship> {
    return await this.shipModel.create({
      ...createShipDto,
      status: createShipDto.status ?? true,
    });
  }

  async findAll(): Promise<Ship[]> {
    return await this.shipModel.findAll({
      order: [['itemId', 'asc']],
      include: [
        {
          model: Item,
          attributes: ['id', 'name', 'spec', 'price', 'description', 'markup', 'unit'],
        },
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
        {
          model: Vendor,
          attributes: ['id', 'name'],
        },
      ],
    });
  }

  async findOne(id: number): Promise<Ship> {
    const ship = await this.shipModel.findByPk(id, {
      include: [
        {
          model: Item,
          attributes: ['id', 'name'],
        },
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
        {
          model: Vendor,
          attributes: ['id', 'name'],
        },
      ],
    });
    if (!ship) {
      throw new NotFoundException(`Ship with ID ${id} not found`);
    }
    return ship;
  }

  async update(id: number, updateShipDto: UpdateShipDto): Promise<Ship> {
    const ship = await this.findOne(id);
    await ship.update(updateShipDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const ship = await this.findOne(id);
    await ship.destroy();
  }

  async findActive(): Promise<Ship[]> {
    return await this.shipModel.findAll({
      where: { status: true },
      include: [
        {
          model: Item,
          attributes: ['id', 'name'],
        },
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
        {
          model: Vendor,
          attributes: ['id', 'name'],
        },
      ],
    });
  }

  async findByItem(itemId: number): Promise<Ship[]> {
    return await this.shipModel.findAll({
      where: { itemId },
      include: [
        {
          model: Item,
          attributes: ['id', 'name'],
        },
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
        {
          model: Vendor,
          attributes: ['id', 'name'],
        },
      ],
    });
  }

  async findByLocation(locationId: number): Promise<Ship[]> {
    return await this.shipModel.findAll({
      where: { locationId },
      include: [
        {
          model: Item,
          attributes: ['id', 'name'],
        },
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
        {
          model: Vendor,
          attributes: ['id', 'name'],
        },
      ],
    });
  }

  async findByCategory(categoryId: number): Promise<Ship[]> {
    return await this.shipModel.findAll({
      where: { categoryId },
      include: [
        {
          model: Item,
          attributes: ['id', 'name'],
        },
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
        {
          model: Vendor,
          attributes: ['id', 'name'],
        },
      ],
    });
  }

  async search(query: string): Promise<Ship[]> {
    if (!query || query.trim() === '') {
      return await this.findAll();
    }

    const searchTerm = `%${query}%`;

    return await this.shipModel.findAll({
      order: [['itemId', 'asc']],
      include: [
        {
          model: Item,
          attributes: ['id', 'name', 'spec', 'price', 'description', 'markup', 'unit'],
          where: {
            [Op.or]: [
              { name: { [Op.iLike]: searchTerm } },
              { spec: { [Op.iLike]: searchTerm } },
            ],
          },
          required: true,
        },
        {
          model: Location,
          attributes: ['id', 'name'],
        },
        {
          model: Category,
          attributes: ['id', 'name'],
        },
        {
          model: Vendor,
          attributes: ['id', 'name'],
        },
      ],
    });
  }

  async bulkUpdate(bulkUpdateShipDto: BulkUpdateShipDto): Promise<{ updated: number }> {
    console.log(bulkUpdateShipDto);
    const { ids, fields } = bulkUpdateShipDto;
    
    const [affectedCount] = await this.shipModel.update(fields, {
      where: { id: ids },
    });

    return { updated: affectedCount };
  }
}
