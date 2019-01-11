const argv= require('./config/yargs.js').argumentos
const colors= require('colors');

const {creararch, listartab}= require('./multiplicar/multiplicar2.js');
let comando= argv._[0];

switch (comando)
{
  case 'listar':
    listartab(argv.base, argv.limite);
    break;
  case 'crear':
  creararch(argv.base, argv.limite)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));
    break;
  default:
    console.log('Comando no reconocido');
}

//console.log(argv);
