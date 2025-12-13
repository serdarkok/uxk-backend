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
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@ApiTags('locations')
@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new location' })
  @ApiResponse({
    status: 201,
    description: 'The location has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all locations' })
  @ApiResponse({
    status: 200,
    description: 'Return all locations.',
  })
  findAll() {
    return this.locationService.findAll();
  }

  @Get('active')
  @ApiOperation({ summary: 'Get all active locations' })
  @ApiResponse({
    status: 200,
    description: 'Return all active locations.',
  })
  findActive() {
    return this.locationService.findActive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a location by id' })
  @ApiParam({ name: 'id', description: 'Location ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the location.',
  })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  findOne(@Param('id') id: string) {
    return this.locationService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a location' })
  @ApiParam({ name: 'id', description: 'Location ID' })
  @ApiResponse({
    status: 200,
    description: 'The location has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a location' })
  @ApiParam({ name: 'id', description: 'Location ID' })
  @ApiResponse({
    status: 204,
    description: 'The location has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Location not found.' })
  remove(@Param('id') id: string) {
    return this.locationService.remove(+id);
  }
}
