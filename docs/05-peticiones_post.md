# Método Post
Para crear una petición post, debemos usar el decorador @Post, en el return deberemos formar un objeto JSON. 

Para coger la información del body de la petición necesitaremos usar el decorador @Body de esta manera

```typescript
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'creando una categoria',
      payload,
    };
  }
```