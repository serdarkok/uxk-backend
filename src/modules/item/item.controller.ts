import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam
} from '@nestjs/swagger';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@ApiTags('items')
@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new item' })
  @ApiResponse({
    status: 201,
    description: 'The item has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all items' })
  @ApiResponse({
    status: 200,
    description: 'Return all items.',
  })
  findAll() {
    return this.itemService.findAll();
  }

  @Get('active')
  @ApiOperation({ summary: 'Get all active items' })
  @ApiResponse({
    status: 200,
    description: 'Return all active items.',
  })
  findActive() {
    return this.itemService.findActive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an item by id' })
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiResponse({
    status: 200,
    description: 'Return the item.',
  })
  @ApiResponse({ status: 404, description: 'Item not found.' })
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an item' })
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiResponse({
    status: 200,
    description: 'The item has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Item not found.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(+id, updateItemDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete an item' })
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiResponse({
    status: 204,
    description: 'The item has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Item not found.' })
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }
}
