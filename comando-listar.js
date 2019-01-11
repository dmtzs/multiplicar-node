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

.command('crear', 'Genera un archivo con la tabla de multiplicar hasta el límite deseado.',
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
