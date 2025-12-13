import { IsString, IsNumber, IsBoolean, IsOptional, IsInt, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateItemDto {
  @ApiPropertyOptional({
    description: 'Item name',
    example: 'Curtain',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Item description',
    example: 'Curtain for home',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Item specifications',
    example: 'Nice curtain, good cotton etc...',
  })
  @IsString()
  @IsOptional()
  spec?: string;

  @ApiPropertyOptional({
    description: 'Item price',
    example: 450.00,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @ApiPropertyOptional({
    description: 'Item markup',
    example: 10,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  markup?: number;

  @ApiPropertyOptional({
    description: 'Unit of measurement',
    example: 'piece',
  })
  @IsString()
  @IsOptional()
  unit?: string;

  @ApiPropertyOptional({
    description: 'Location ID',
    example: 1,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  locationId?: number;

  @ApiPropertyOptional({
    description: 'Category ID',
    example: 1,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  categoryId?: number;

  @ApiPropertyOptional({
    description: 'Item status',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
