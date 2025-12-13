import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateVendorDto {
  @ApiPropertyOptional({
    description: 'Vendor name',
    example: 'ABC Supplies Co.',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Vendor address',
    example: '123 Main Street, New York, NY 10001',
  })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiPropertyOptional({
    description: 'Vendor status',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
