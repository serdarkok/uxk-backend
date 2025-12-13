import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLocationDto {
  @ApiPropertyOptional({
    description: 'Location name',
    example: 'New York Warehouse',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Location status',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
