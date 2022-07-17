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
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `Tu eres el limin ${limit} y tu el offset ${offset}`;
  // }

  @Get()
  getAll(
    @Query('limit') limit = 100, // se difiere el tipado del valor de la asignación.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Tu eres el limit ${limit} y tu el offset ${offset} con esta marca ${brand}`,
    };
  }

  @Get('filter')
  getFilter() {
    return { message: 'Yo soy un filter' };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(
    // @Res() response: Response,
    @Param('productId') productId: string,
  ) {
    // response.status(200).send({
    //   message: `producto con el id ${productId}`,
    // }); Este sería el formato en Express

    return {
      message: `producto con el id ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'action de crear',
      payload,
    };
  }
  @Put(':productId')
  update(@Param('productId') id: string, @Body() payload: any) {
    return {
      id,
      message: 'Actualizando el producto',
      payload,
    };
  }

  @Delete(':productId')
  delete(@Param('productId') id: string) {
    return { message: 'eliminamos el producto', id };
  }
}
