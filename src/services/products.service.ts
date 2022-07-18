import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Este es el texto descripcion',
      price: 123,
      stock: 2,
      image: '',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Este es el texto descripcion',
      price: 22,
      stock: 23,
      image: '',
    },
  ];

  findOne(id: number) {
    const productFinded = this.products.find((item) => item.id === id);
    if (!productFinded) {
      throw new NotFoundException(`Product with id#${id} not found`);
    }
    return productFinded;
  }

  create(payload: CreateProductDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }

  findAll() {
    return this.products;
  }
}
