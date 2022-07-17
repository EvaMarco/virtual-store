import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrderController } from './controllers/order.controller';
import { CustomersController } from './controllers/customers.controller';
import { BrandsController } from './controllers/brands.controller';
import { UsersController } from './controllers/users.controller';
import { ProductsService } from './services/products.service';
@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrderController, CustomersController, BrandsController, UsersController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
