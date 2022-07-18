# Pipes
Es un artefacto de nestJS que tiene dos funciones principales, transformar y validar información.

Un ejemplo muy sencillo de pipe es un parseador. Por ejemplo, en nuestros params siempre vamos a recibir string, pero podemos usar un pipe para asegurarnos que si tenemos un campo number este se compruebe y se parse de texto a numero antes de ser entregado al service.

Se pueden generar a traves de la consola usando el commando
`nest g pipe common/nombre`