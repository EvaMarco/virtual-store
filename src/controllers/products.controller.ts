import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `Tu eres el limin ${limit} y tu el offset ${offset}`;
  // }

  @Get('')
  getProducts(
    @Query('limit') limit = 100, // se difiere el tipado del valor de la asignación.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Tu eres el limit ${limit} y tu el offset ${offset} con esta marca ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `producto con el id ${productId}`;
  }
}
