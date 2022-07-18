import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from './../services/products.service';
import { ParseIntPipe } from './../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(
    @Query('limit') limit = 100, // se difiere el tipado del valor de la asignación.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `Tu eres el limit ${limit} y tu el offset ${offset} con esta marca ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getFilter() {
    return { message: 'Yo soy un filter' };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':productId')
  update(
    @Param('productId', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }

  @Delete(':productId')
  delete(@Param('productId', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
