import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Category name',
    example: 'Drapery',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    description: 'Category status',
    example: true,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
