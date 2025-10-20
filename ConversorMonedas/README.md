<h1>Prompt utilizado:</h1>

El taller del dia de hoy es el siguiente y está enfocado en bibliotecas para la reutilizacion de código Ejemplo utilizando IA: 
PROMPT 1: Necesito un ejemplo a detalle guiado para crear una biblioteca de suma resta multiplicacion y division con funciones utiles de una calculadora simple. Necesitamos tener un proyecto principal y una libreria de las operaciones. Quisiera el codigo ejemplo y explicado en nodejs. Es para estudiantes de universidad y que entiendan el uso de bibliotecas o librerias dentro del codigo. 
PROMPT 2: En vez de usar tambien el console.log, quisieramos tener una libreria de logs para el usuario, puede que estos logs tengan un mejor formato y colores 
PROMPT 3: Finalmente quisieramos una libreria para obtener los datos del usuario por consola, para seleccionra las operaciones de suma resta multiplicacion y division La indicación de la tarea finalmente es esto: Realizar una aplicativo con librerias practicas para la reutilizacion de codigo como el ejemplo en clase, puede ser un alcoholimetro, un calculador de impuestos, etc. El ejemplo lo pueden poner ustedes. Pueden utilizar la IA pero deben guardar los PROMPTS realizados. 
Ahora quiero que realices un ejemplo paso a paso de un conversor de unidades, con librerías propias, para que yo pueda replicarlo.

<h1>Estructura de carpetas</h1>

Crea el proyecto y las carpetas así:

conversor-monedas/
├─ package.json
├─ app.js
├─ libs/
│  ├─ converter.js   # librería de operaciones
│  ├─ logger.js      # librería de logs (colores)
│  └─ input.js       # librería para obtener datos del usuario


<h1>En la terminal:</h1>

mkdir conversor-monedas
cd conversor-monedas
npm init -y
npm install chalk
mkdir libs

<h1>Cómo ejecutar</h1>

```js
node app.js
```