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

----------------      ----------------        ----------------  
|              |      |              |        |              |
|  CONTROLLER  |      |   SERVICE    |        |     DATA     |
|              |      |              |        |    ACCESS    |
----------------      ----------------        ----------------


Para comenzar a crear un proyecto con nest js primero instalaremos su cliente
`npm i @nestjs/cli`
Comprobaremos la version con 
`nest -v`
y podremos crear nuestro proyecto con
`nest new nombre-proyecto`
Esto creará una carpeta con toda la instalación



