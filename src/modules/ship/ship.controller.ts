import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { ShipService } from './ship.service';
import { CreateShipDto } from './dto/create-ship.dto';
import { UpdateShipDto } from './dto/update-ship.dto';
import { BulkUpdateShipDto } from './dto/bulk-update-ship.dto';

@ApiTags('ships')
@Controller('ships')
export class ShipController {
  constructor(private readonly shipService: ShipService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ship' })
  @ApiResponse({
    status: 201,
    description: 'The ship has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createShipDto: CreateShipDto) {
    return this.shipService.create(createShipDto);
  }

  @Post('bulk-update')
  @ApiOperation({ summary: 'Bulk update ships' })
  @ApiResponse({
    status: 200,
    description: 'Ships have been successfully updated in bulk.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  bulkUpdate(@Body() bulkUpdateShipDto: BulkUpdateShipDto) {
    return this.shipService.bulkUpdate(bulkUpdateShipDto);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search ships by item name, spec, or item ID (case-insensitive)' })
  @ApiQuery({
    name: 'q',
    description: 'Search query for item name, spec, or item ID (case-insensitive)',
    required: true,
    example: 'Curtain',
  })
  @ApiResponse({
    status: 200,
    description: 'Return ships matching the search query (case-insensitive).',
  })
  search(@Query('q') query: string) {
    return this.shipService.search(query);
  }

  @Get()
  @ApiOperation({ summary: 'Get all ships' })
  @ApiResponse({
    status: 200,
    description: 'Return all ships.',
  })
  findAll() {
    return this.shipService.findAll();
  }

  @Get('active')
  @ApiOperation({ summary: 'Get all active ships' })
  @ApiResponse({
    status: 200,
    description: 'Return all active ships.',
  })
  findActive() {
    return this.shipService.findActive();
  }

  @Get('by-item/:itemId')
  @ApiOperation({ summary: 'Get ships by item ID' })
  @ApiParam({ name: 'itemId', description: 'Item ID' })
  @ApiResponse({
    status: 200,
    description: 'Return ships for the specified item.',
  })
  findByItem(@Param('itemId') itemId: string) {
    return this.shipService.findByItem(+itemId);
  }

  @Get('by-location/:locationId')
  @ApiOperation({ summary: 'Get ships by location ID' })
  @ApiParam({ name: 'locationId', description: 'Location ID' })
  @ApiResponse({
    status: 200,
    description: 'Return ships for the specified location.',
  })
  findByLocation(@Param('locationId') locationId: string) {
    return this.shipService.findByLocation(+locationId);
  }

  @Get('by-category/:categoryId')
  @ApiOperation({ summary: 'Get ships by category ID' })
  @ApiParam({ name: 'categoryId', description: 'Category ID' })
  @ApiResponse({
    status: 200,
    description: 'Return ships for the specified category.',
  })
  findByCategory(@Param('categoryId') categoryId: string) {
    return this.shipService.findByCategory(+categoryId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a ship by id' })
  @ApiParam({ name: 'id', description: 'Ship ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the ship.',
  })
  @ApiResponse({ status: 404, description: 'Ship not found.' })
  findOne(@Param('id') id: string) {
    return this.shipService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a ship' })
  @ApiParam({ name: 'id', description: 'Ship ID' })
  @ApiResponse({
    status: 200,
    description: 'The ship has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Ship not found.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  update(@Param('id') id: string, @Body() updateShipDto: UpdateShipDto) {
    return this.shipService.update(+id, updateShipDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a ship' })
  @ApiParam({ name: 'id', description: 'Ship ID' })
  @ApiResponse({
    status: 204,
    description: 'The ship has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Ship not found.' })
  remove(@Param('id') id: string) {
    return this.shipService.remove(+id);
  }
}
