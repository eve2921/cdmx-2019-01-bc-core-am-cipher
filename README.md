CodeBox
Es una herramienta de códificado tipo cesar que se basa en el desplazamiento de letras para generar un nuevo mensaje. El codebox es un elemento complementario de un juego aliens que visitaron la tierra durante la epoca del esplendor de Roma por lo que aprendieron a usar el cifrado cesar. Atravez de los mensaje codificados el jugador puede acceder a diferentes premios y también puede enviar mensaje a otros jugadores sin que los equipos contrarios los decifren a simple vista.

Cómo empezar
Una vez clonado el repositorio de git encontraras en la carpeta de src los archivos en los que se encuentra el código:
cipher.js, index.html, index.js y style.css

¿Quiénes son los principales usuarios de producto?
Usuarios entre 15 y 28 años que jueguen "Aliens en el tiempo"

¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Ser capaces de realizar la codificación y decodificación de mensajes mas rapido que otros usuarios del juego.

Cómo el producto resuelve un problema
Optimizar el decifrado de codigos que se les entrega durante el juego, tambien ellos pueden realizar sus propios codigos.


Ejecución de las pruebas
Al abrir la consola podemos realizar pruebas con el comando npm run test y conoceremos el estado del proyecto.
El test evalua lo siguiente:
Que cipher sea un objeto
Encode y decode deben ser funciones
En la función encode al colocar el offset 33, la cadena  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" retorne "HIJKLMNOPQRSTUVWXYZABCDEFG".
En la función decode al colocar el offset 33, la cadena "HIJKLMNOPQRSTUVWXYZABCDEFG" debe retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 

Construido con:
Vanilla Javascript - Framework de javascript
Node.js para ejecutar los complementos y comandos necesarios de los test

