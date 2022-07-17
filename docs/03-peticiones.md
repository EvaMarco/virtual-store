# Recepción de parámetros

Para poder recibir parámetros usaremos un nuevo decorador llamado `@params` que se recibe como un atributo del método.

Por ejemplo:
```
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `producto con el id ${productId}`;
  }
  ```
  En este código sabemos que el path nos va a traer el productId, y que tiene type string.
  Lo extraemos del path con el decorador @Param. y lo podemos usar donde necesitemos. En este caso en la respuesta. 


  ## Parámetros tipo Query

  Nos sirven para realizar peticiones grandes sin tener que inundar nuestro path de parámetros.

  Se suele escribir comenzando con '?' y se concatenan con '&'

  Por ejemplo si tenemos esta url http://localhost:3000/products?limit=1000&brand=%20%27pepita%27

  Y tenemos este código
  ```
    @Get('products')
  getProducts(
    @Query('limit') limit = 100, // se difiere el tipado del valor de la asignación.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Tu eres el limit ${limit} y tu el offset ${offset} con esta marca ${brand}`;
  }
  ``` 
  El resultado será `Tu eres el limit 1000 y tu el offset 0 con esta marca 'pepita'`

Las rutas dinámicas pueden chocar con nuestras rutas fijas

```
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `producto con el id ${productId}`;
  }

  @Get('products/filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }
```

En este caso si navegamos a http://localhost:3000/products/filter

El resultado será `producto con el id filter`

Para evitar esta colisión las rutas fijas las definiremos antes que las dinámicas

```
  @Get('products/filter')
  getProductFilter() {
    return 'Yo soy un filter';
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `producto con el id ${productId}`;
  }
```
El resultado será `Yo soy un filter`