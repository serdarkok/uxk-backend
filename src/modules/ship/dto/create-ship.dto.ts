import { 
  IsString, 
  IsBoolean, 
  IsOptional, 
  IsInt, 
  Min,
  Max,
  IsDateString 
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateShipDto {
  @ApiProperty({
    description: 'Item ID',
    example: 1,
  })
  @IsInt()
  @Min(1)
  itemId: number;

  @ApiPropertyOptional({
    description: 'Ship to title',
    example: 'Grand Hotel Reception',
  })
  @IsString()
  @IsOptional()
  shipToTitle?: string;

  @ApiPropertyOptional({
    description: 'Ship to address',
    example: '123 Main Street, New York, NY 10001',
  })
  @IsString()
  @IsOptional()
  shipToAddress?: string;

  @ApiPropertyOptional({
    description: 'Ship from',
    example: 'ABC Drapery',
  })
  @IsString()
  @IsOptional()
  shipFrom?: string;

  @ApiPropertyOptional({
    description: 'Vendor ID',
    example: 1,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  vendorId?: number;

  @ApiPropertyOptional({
    description: 'Quantity',
    example: 5,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  quantity?: number;

  @ApiPropertyOptional({
    description: 'Phase number',
    example: 1,
  })
  @IsInt()
  @Min(1)
  @Max(99)
  @IsOptional()
  phase?: number;

  @ApiPropertyOptional({
    description: 'Additional notes',
    example: 'Handle with care',
  })
  @IsString()
  @IsOptional()
  notes?: string;

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
    description: 'PO approval date (YYYY-MM-DD)',
    example: '2024-01-15',
  })
  @IsDateString()
  @IsOptional()
  poApproval?: Date;

  @ApiPropertyOptional({
    description: 'Hotel need by date (YYYY-MM-DD)',
    example: '2024-02-01',
  })
  @IsDateString()
  @IsOptional()
  hotelNeedBy?: Date;

  @ApiPropertyOptional({
    description: 'Expected delivery date (YYYY-MM-DD)',
    example: '2024-01-30',
  })
  @IsDateString()
  @IsOptional()
  exceptedDelivery?: Date;

  @ApiPropertyOptional({
    description: 'Shops send date (YYYY-MM-DD)',
    example: '2024-01-20',
  })
  @IsDateString()
  @IsOptional()
  shopsSend?: Date;

  @ApiPropertyOptional({
    description: 'Shops approved date (YYYY-MM-DD)',
    example: '2024-01-18',
  })
  @IsDateString()
  @IsOptional()
  shopsApproved?: Date;

  @ApiPropertyOptional({
    description: 'Shops delivered date (YYYY-MM-DD)',
    example: '2024-01-25',
  })
  @IsDateString()
  @IsOptional()
  shopsDelivered?: Date;

  @ApiPropertyOptional({
    description: 'Ordered date (YYYY-MM-DD)',
    example: '2024-01-10',
  })
  @IsDateString()
  @IsOptional()
  ordered?: Date;

  @ApiPropertyOptional({
    description: 'Shipped date (YYYY-MM-DD)',
    example: '2024-01-22',
  })
  @IsDateString()
  @IsOptional()
  shipped?: Date;

  @ApiPropertyOptional({
    description: 'Delivered date (YYYY-MM-DD)',
    example: '2024-01-28',
  })
  @IsDateString()
  @IsOptional()
  delivered?: Date;

  @ApiPropertyOptional({
    description: 'Ship status',
    example: true,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
