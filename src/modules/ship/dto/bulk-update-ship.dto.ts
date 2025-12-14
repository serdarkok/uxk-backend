import { 
  IsArray, 
  IsInt, 
  IsString, 
  IsOptional, 
  ValidateNested,
  ArrayMinSize 
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class BulkUpdateFields {
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
    description: 'Vendor ID',
    example: 1,
    required: false,
  })
  @IsInt()
  @IsOptional()
  vendorId?: number;

  @ApiProperty({
    description: 'Additional notes',
    example: 'Updated in bulk',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;
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
