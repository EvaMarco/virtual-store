import {
  Controller,
  Get,
  Query,
  Param,
  Put,
  Post,
  Body,
  Delete,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers(
    @Query('limit') limit = 100, // se difiere el tipado del valor de la asignación.
    @Query('offset') offset = 0,
  ) {
    return {
      message: `Esta es la lista de todos los clientes, se puestran ${limit} y el primer elemento de la lista es ${offset}`,
    };
  }
  @Get(':customerId')
  getCustomer(@Param('customerId') id: string) {
    return { message: `El cliente con el id ${id}` };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'creando un cliente',
      payload,
    };
  }

  @Put(':customerId')
  update(@Param('customerId') id: string, @Body() payload: any) {
    return {
      id,
      message: 'modificando un cliente',
      payload,
    };
  }

  @Delete(':customerId')
  delete(@Param('customerId') id: string) {
    return { message: 'eliminamos un cliente', id };
  }
}
