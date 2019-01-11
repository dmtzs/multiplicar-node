const {creararchivo}= require('./multiplicar/multiplicar.js');//require es para después poner la ruta del archivo que necesito.


/*console.log(process.argv); sirve para ver los argumentos que tiene el programa
*o para ver los que nosotros mismos le agregamos.
*Cualquier otra duda ejecutarlo con el creararchivo documentado para ver
*mejor lo que pasa.*/

let argv= process.argv;
let parametro= argv[2];
let base= parametro.split('=')[1];//split sirve para separar cosas en específico, como en java normal.
/*Si le ponemos después del split [valor deseado] se sacara solo la posición del arreglo
deseado en este caso el valor que queremos es el que estará en la posición 1 del arreglo
generado por el split.*/

/*Base obtendrá el valor del arreglo resultante debido al split que pusimos antes*/
console.log(base);

/*En el gitbash debo de poner --nombre-variable=valor para que así adquiera la variable deseada el valor deseado.*/

creararchivo(base)
  .then(archivo => console.log(`Archivo creado: ${archivo}`))//Se pone el .then porque es lo que va a hacer en caso de retornar la promesa de manera exitosa.
  .catch(err => console.log(err));//Se pone el .catch en caso de dar error el retorno de la promesa.
