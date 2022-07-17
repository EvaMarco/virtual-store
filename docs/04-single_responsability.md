# Single responsability

Es uno de los patrones de los principios SOLID y es muy importante que lo apliquemos en nuestros controladores

Según este principio, nuestros métodos solo deben hacer una cosa. Una única responsabilidad.

Si tenemos una función suma, esta solo debe sumar.
Así mismo nuestro controller puede tener varios métodos, pero solo debería tener una responsabilidad. 
Por ejemplo, solo encargarse de los productos, o solo de las categorías, pero no hacer las dos. 

Podemos con nestJs crear controladores desde la consola. 
Para ello usaremos el comando
`nest g controller products`. Al ejecutar este comando se nos crean dos archivos, uno para test y otro para el código del controllador.

Si queremos podemos indicarle la ruta que queremos forme para dejar nuestro controlador
`nest g controller controllers/products`

O incluso si no queremos una carpeta por cada controlador podemos hacer
`nest g controller controllers/products --flat`

Al crearlos así el controlador @Controller viene con atributo, eso hace que podamos eliminar el atributo innecesario.

```Typescript
@Controller('products') // Trae products
export class ProductsController {

  @Get() // podemos eliminarlo de la ruta
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Tu eres el limit ${limit} y tu el offset ${offset} con esta marca ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `producto con el id ${productId}`;
  }
}
```