# Data transfers objets

Usamos estas estructuras para validar la estructura del body de un payload, por ejemplo, y validar sus tipos.

No debemos usar los entities para realizar estas comprobaciones porque a veces en base de datos no tienen por que estar todos los datos contenidos en el payload. 

```typescript
export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}
```
Y luego podemos usar este dto como comprobación te tipos en el servicio y controlador.
Los parámetros opcionales se pueden marcar con una "?" despues del nombre.

Esta validación de tipos es solo para el tiempo de desarrollo, para la validación de parámetros usaremos un par de dependecias. 
`npm i class-validator class-transformer`

Class validator nos añade decoradores que realizan validaciones como @IsString, @IsNumber. Existen validadores de url, de mail. Tambien para comprobar que no es un valor vacío.

Para que funcione en el archivo main debemos agregar

```typescript
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // añadimos esta línea
  await app.listen(3000);
}
bootstrap();
```

Para combinar estos decoradores en varios dtos vamos a usar otra dependencia. 
`$ npm i @nestjs/mapped-types`
Si queremos que una clase de validaciones extienda de otra usaremos PartialType que hace que los atributos sean opcionales

```typescript
export class UpdateProductDto extends PartialType(CreateProductDto) {}
```


Para evitar añadir datos de más usaremos el atributo whitelist en nuestro main ts

```typescript
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
```

Esto simplemente lo ignora, pero si lo que queremos es advertirlo usamores además la opción `forbidNonWhitelisted`