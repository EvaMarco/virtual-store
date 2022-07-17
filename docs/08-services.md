# Servicios
Los servicios son los que se encargan de recoger las peticiones realizadas por los controladores y ejecutar los cambios en los data models o conseguir la información. 

Los servicios usan el decorador @Injectable(), este decorador usa un patron llamado inyección de dependencias. 

## Crear servicios
Tambien podemos generar servicios por medio de la consola. Para ello usaremos el comando `nest g s services/products --flat`
En app.modules.ts se ha añadido este servicio debajo del grupo providers. 
