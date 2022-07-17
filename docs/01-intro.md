nestJS es un framework sobre abstracciones basado en NodeJS

NestJS le añade a Node varios beneficios:
- Los principios SOLID
- TypeScript
- Orientado a objetos
- Programación funcional
- Programación reactiva

Nos brinda una arquitectura 

                      ----------------
                      |              |
                      |  DATA MODEL  |
                      |              |
                      ----------------
                            ^ v
----------------       ----------------        ----------------  
|              |       |              |        |              |
|  CONTROLLER  |  ->   |   SERVICE    |  ->    |     DATA     |
|              |  <-   |              |  <-    |    ACCESS    |
----------------       ----------------        ----------------


Para comenzar a crear un proyecto con nest js primero instalaremos su cliente
`npm i @nestjs/cli`
Comprobaremos la version con 
`nest -v`
y podremos crear nuestro proyecto con
`nest new nombre-proyecto`
Esto creará una carpeta con toda la instalación


una vez dentro de esa carpeta podemos ejecutar
`npm run start`
y accediendo a `localhost:3000`veremos que esta arrancada.


La estructura del proyecto consta de varias carpetas y archivos:
- package.json -> con las dependencias y los scripts
- prettierrc y eslint -> con ayudas para escribir un mejor código. 
- nest-cli.json -> con configuraciones básicas del proyecto.
- readme -> con una estructura inicial para escribir el readme de tu proyecto e información sobre nest
- tsconfig -> la configuración para transpilar ts a js ya que este framework usa ts como lenguaje
- test -> carpeta para test
- src -> donde montaremos el cuerpo de la aplicación 


El archivo donde se ejecuta y corre nuestra app es `main.ts` donde se establece el puerto

