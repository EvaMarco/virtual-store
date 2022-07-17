import { Controller, Get, Query, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(
    @Query('limit') limit = 100, // se difiere el tipado del valor de la asignación.
    @Query('offset') offset = 0,
  ) {
    return {
      message: `Esta es la lista de todos los usuarios, se puestran ${limit} y el primer elemento de la lista es ${offset}`,
    };
  }
  @Get(':id')
  getUser(@Param('id') id: string) {
    return { message: `El usuario con el id ${id}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'creando un usuario',
      payload,
    };
  }

  @Put(':userId')
  update(@Param('userId') id: string, @Body() payload: any) {
    return {
      id,
      message: 'modificando un usuario',
      payload,
    };
  }

  @Delete(':userId')
  delete(@Param('userId') id: string) {
    return { message: 'eliminamos un usuario', id };
  }
}
