import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

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
  ];

  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((item) => {
      item.id === id;
    });
  }
  create(payload: any) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
