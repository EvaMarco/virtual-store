import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return {
      message: `Esta es la categoria ${id} y tiene el producto con el id ${productId}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'creando una categoria',
      payload,
    };
  }
  @Put(':categoryId')
  update(@Param('categoryId') id: string, @Body() payload: any) {
    return {
      id,
      message: 'modificando una categoria',
      payload,
    };
  }

  @Delete(':categoryId')
  delete(@Param('categoryId') id: string) {
    return { message: 'eliminamos la categoria', id };
  }
}
