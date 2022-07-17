# Servicios
Los servicios son los que se encargan de recoger las peticiones realizadas por los controladores y ejecutar los cambios en los data models o conseguir la información. 

Los servicios usan el decorador @Injectable(), este decorador usa un patron llamado inyección de dependencias. 

## Crear servicios
Tambien podemos generar servicios por medio de la consola. Para ello usaremos el comando `nest g s services/products --flat`
En app.modules.ts se ha añadido este servicio debajo del grupo providers. 

Una vez creada la estructura que quedaría algo así 
```typescript
@Injectable()
export class ProductsService {}
```

En este curso no se ve la sección de unir a la base de datos así que trabajaremos con una estructura local. 

Lo primero que deberemos hacer es crear el producto base. Y debemos darle una estructura. La estructura se la daremos en un archivo entity

```typescript
export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}
```
Cuando ya le hemos asignado como debe ser y sus tipos, podemos llevarnos esta entity al nuestro servicio, y decir que nuestros products será un array de Products

```typescript
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
```
Y luego podemos definir métodos para encontrar un producto, devolverlos todos o actualizar uno en concreto. 

```typescript
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
```

## Inyectar dependencias

A la hora de  unir los controlladores con sus servicios, usaremos el patrón de inyección de dependencias:
Para ello primero hemos de importar en nuestro contructor el servicio
`import { ProductsService } from './../services/products.service';`
Depues en el contructor de nuestro controlador le diremos que va a recibir este servicio 
```typescript
  constructor(private productsService: ProductsService) {}
```

Por último podremos acceder a los métodos definidos en el servicio dentro del controlador. 

```typescript
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: number) {
    this.productsService.findOne(productId);
  }
```