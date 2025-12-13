import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiPropertyOptional({
    description: 'Category name',
    example: 'Drapery',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Category status',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
