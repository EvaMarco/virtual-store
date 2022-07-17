import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'Hola mundo¡';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Yo soy nuevo';
  }

  @Get('/ruta/')
  otherEndpoint() {
    return 'vamos a usar /esto/';
  }

  @Get('products/filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `producto con el id ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `Esta es la categoria ${id} y tiene el producto con el id ${productId}`;
  }

  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `Tu eres el limin ${limit} y tu el offset ${offset}`;
  // }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100, // se difiere el tipado del valor de la asignación.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Tu eres el limit ${limit} y tu el offset ${offset} con esta marca ${brand}`;
  }
}
