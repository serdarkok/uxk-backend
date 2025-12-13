import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Vendor } from './vendor.model';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorService {
  constructor(
    @InjectModel(Vendor)
    private vendorModel: typeof Vendor,
  ) {}

  async create(createVendorDto: CreateVendorDto): Promise<Vendor> {
    return await this.vendorModel.create({
      ...createVendorDto,
      status: createVendorDto.status ?? true,
    });
  }

  async findAll(): Promise<Vendor[]> {
    return await this.vendorModel.findAll();
  }

  async findOne(id: number): Promise<Vendor> {
    const vendor = await this.vendorModel.findByPk(id);
    if (!vendor) {
      throw new NotFoundException(`Vendor with ID ${id} not found`);
    }
    return vendor;
  }

  async update(id: number, updateVendorDto: UpdateVendorDto): Promise<Vendor> {
    const vendor = await this.findOne(id);
    await vendor.update(updateVendorDto);
    return vendor;
  }

  async remove(id: number): Promise<void> {
    const vendor = await this.findOne(id);
    await vendor.destroy();
  }

  async findActive(): Promise<Vendor[]> {
    return await this.vendorModel.findAll({
      where: { status: true },
    });
  }
}
