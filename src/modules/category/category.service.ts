import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryModel: typeof Category,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoryModel.create({
      ...createCategoryDto,
      status: createCategoryDto.status ?? true,
    });
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.findAll();
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryModel.findByPk(id);
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const category = await this.findOne(id);
    await category.update(updateCategoryDto);
    return category;
  }

  async remove(id: number): Promise<void> {
    const category = await this.findOne(id);
    await category.destroy();
  }

  async findActive(): Promise<Category[]> {
    return await this.categoryModel.findAll({
      where: { status: true },
    });
  }
}
