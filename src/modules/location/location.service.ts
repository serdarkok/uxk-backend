import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Location } from './location.model';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location)
    private locationModel: typeof Location,
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    return await this.locationModel.create({
      ...createLocationDto,
      status: createLocationDto.status ?? true,
    });
  }

  async findAll(): Promise<Location[]> {
    return await this.locationModel.findAll();
  }

  async findOne(id: number): Promise<Location> {
    const location = await this.locationModel.findByPk(id);
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    return location;
  }

  async update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location> {
    const location = await this.findOne(id);
    await location.update(updateLocationDto);
    return location;
  }

  async remove(id: number): Promise<void> {
    const location = await this.findOne(id);
    await location.destroy();
  }

  async findActive(): Promise<Location[]> {
    return await this.locationModel.findAll({
      where: { status: true },
    });
  }
}
