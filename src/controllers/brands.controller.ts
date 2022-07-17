import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(
    @Query('limit') limit = 100, // se difiere el tipado del valor de la asignación.
    @Query('offset') offset = 0,
  ) {
    return {
      message: `Esta es la lista de todas las marcas, se puestran ${limit} y el primer elemento de la lista es ${offset}`,
    };
  }
  @Get(':id')
  getBrand(@Param('id') id: string) {
    return { message: `La marca con el id ${id}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'creadno una marca',
      payload,
    };
  }

  @Put(':brandId')
  update(@Param('brandId') id: string, @Body() payload: any) {
    return {
      id,
      message: 'modificando una marca',
      payload,
    };
  }

  @Delete(':brandId')
  delete(@Param('brandId') id: string) {
    return { message: 'eliminamos la marca', id };
  }
}
