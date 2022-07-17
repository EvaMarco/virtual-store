# Método put

Este método nos sirve para actualizar las entradas que tenemos guardadas con nuevos datos. 

Para realizar esta acción usaremos el decorador @Put

```typescript
  @Put(':productId')
  update(@Param('productId') id: string, @Body() payload: any) {
    return {
      id,
      message: 'Actualizando el producto',
      payload,
    };
  }
```

Y como vemos es una mezcla de los métodos get, ya que necesitamos un id, y para ello el decorador Param y un post ya que vamos a usar el payload que nos llega desde el Body. 
W