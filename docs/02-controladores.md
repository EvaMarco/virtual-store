# Controladores
Son los encargados de recibir las request de las peticiones, hacen las validaciones, comprueban los permisos, etc y si todo va ok se conentan a los servicios. 

Las peticiones se envian desde algun servidor usando el protocolo HTTP

## Metodos http

- GET -> para obtener información
- PUT -> para modificar
- POST -> para crear
- DELETE -> para borrar

## Decoradores
Son unos prefijos o atributos que se añaden a las clases de typescript y le especifican como se ha de comportar respecto a NestJS.
`@Controller()` es un decorador.


## Crear nueva ruta
En el controlador podemos crear un nuevo método y usando el decorador `@Get() ` podemos establecer que será una nueva ruta. Como parámetro debemos añadir el path de la url

```
  @Get('nuevo')
  newEndpoint() {
    return 'Yo soy nuevo';
  }
```

En ese path en nest podemos usar o no / en el path.
