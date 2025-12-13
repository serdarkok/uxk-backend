import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsOptional, IsInt, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({
    description: 'Item name',
    example: 'Curtain',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    description: 'Item description',
    example: 'Curtain for home',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Item description',
    example: 'Nice curtain, good cotton etc...',
  })
  @IsString()
  @IsOptional()
  spec?: string;

  @ApiProperty({
    description: 'Item price',
    example: 450.00,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'Item markup',
    example: 10,
  })
  @IsNumber()
  @Min(0)
  markup: number;

  @ApiProperty({
    description: 'Unit of measurement',
    example: 'piece',
  })
  @IsString()
  @IsNotEmpty()
  unit: string;

  @ApiProperty({
    description: 'Location ID',
    example: 1,
  })
  @IsInt()
  @Min(1)
  locationId: number;

  @ApiProperty({
    description: 'Category ID',
    example: 1,
  })
  @IsInt()
  @Min(1)
  categoryId: number;

  @ApiPropertyOptional({
    description: 'Item status',
    example: true,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
