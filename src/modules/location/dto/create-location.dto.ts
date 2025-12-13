import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLocationDto {
  @ApiProperty({
    description: 'Location name',
    example: 'New York Warehouse',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    description: 'Location status',
    example: true,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
