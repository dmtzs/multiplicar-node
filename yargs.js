const argv= require('yargs')
/*Primero se escribe el comando a poner en la terminal, el segundo es la información o ayuda para el usuario
y el tercero es un objeto*/
.command('listar', 'Imprime en consola la tabla de multiplicar',
{
  base:
  {
    demand: true,
    alias: 'b'
  },
  limite:
  {
    alias: 'l',
    default: 10//por si la persona no manda nada este será el valor por defecto.
  }
})
.help()
.argv;

const {creararchivo}= require('./multiplicar/multiplicar.js');

let argv2= process.argv;

//console.log(argv.base);
console.log('Límite: ', argv.limite);


/*En consola podemos mandar los parametros que tenemos arriba predefinidos y
sin importar que nos equivoquemos de posición con el argumento este tomará el
correcto y nada más o el que esté predefinido ya con anterioridad.*/

/*Comandos a escribir en terminal de prueba para el programa:
*node yargs listar -b 5, (-b de base)
*node yargs listar --base 5
*node yargs listar --limite=10 --base 60
*para ver esto descomentar lo que dice argv base*/

/*Comandos a escribir en terminal de prueba para el programa:
*node yargs listar --limite=10 --base 60
*node yargs listar --help
*node yargs --help*/
