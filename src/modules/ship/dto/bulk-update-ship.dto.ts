import { 
  IsArray, 
  IsInt, 
  IsString, 
  IsOptional, 
  IsDateString,
  IsBoolean,
  ValidateNested,
  ArrayMinSize 
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class BulkUpdateFields {
  @ApiProperty({
    description: 'Item ID',
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  itemId?: number;
  
  @ApiProperty({
    description: 'Ship to title',
    example: 'Grand Hotel Reception',
    required: false,
  })
  @IsString()
  @IsOptional()
  shipToTitle?: string;

  @ApiProperty({
    description: 'Ship to address',
    example: '123 Main Street, New York, NY 10001',
    required: false,
  })
  @IsString()
  @IsOptional()
  shipToAddress?: string;

  @ApiProperty({
    description: 'Ship from',
    example: 'ABC Drapery',
    required: false,
  })
  @IsString()
  @IsOptional()
  shipFrom?: string;

  @ApiProperty({
    description: 'Vendor ID',
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  vendorId?: number;

  @ApiProperty({
    description: 'Quantity',
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  quantity?: number;

  @ApiProperty({
    description: 'Phase number',
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  phase?: number;

  @ApiProperty({
    description: 'Notes',
    example: 'Updated in bulk',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;

  @ApiProperty({
    description: 'Location ID',
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  locationId?: number;

  @ApiProperty({
    description: 'Category ID',
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  categoryId?: number;

  @ApiProperty({
    description: 'PO approval date (YYYY-MM-DD)',
    example: '2024-01-15',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  poApproval?: Date;

  @ApiProperty({
    description: 'Hotel need by date (YYYY-MM-DD)',
    example: '2024-02-01',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  hotelNeedBy?: Date;

  @ApiProperty({
    description: 'Expected delivery date (YYYY-MM-DD)',
    example: '2024-01-30',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  exceptedDelivery?: Date;

  @ApiProperty({
    description: 'Shops send date (YYYY-MM-DD)',
    example: '2024-01-20',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  shopsSend?: Date;

  @ApiProperty({
    description: 'Shops approved date (YYYY-MM-DD)',
    example: '2024-01-18',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  shopsApproved?: Date;

  @ApiProperty({
    description: 'Shops delivered date (YYYY-MM-DD)',
    example: '2024-01-16',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  shopsDelivered?: Date;

  @ApiProperty({
    description: 'Ordered date (YYYY-MM-DD)',
    example: '2024-01-10',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  ordered?: Date;
  
  @ApiProperty({
    description: 'Shipped date (YYYY-MM-DD)',
    example: '2024-01-22',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  shipped?: Date;

  @ApiProperty({
    description: 'Delivered date (YYYY-MM-DD)',
    example: '2024-01-28',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  delivered?: Date;

  @ApiProperty({
    description: 'Ship status',
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}

export class BulkUpdateShipDto {
  @ApiProperty({
    description: 'Array of ship IDs to update',
    example: [1, 2, 3],
    type: [Number],
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsInt({ each: true })
  ids: number[];

  @ApiProperty({
    description: 'Fields to update',
    type: BulkUpdateFields,
  })
  @ValidateNested()
  @Type(() => BulkUpdateFields)
  fields: BulkUpdateFields;
}
