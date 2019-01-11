const opts=
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
}

const argumentos= require('yargs')
/*Primero se escribe el comando a poner en la terminal, el segundo es la información o ayuda para el usuario
y el tercero es un objeto*/
.command('listar', 'Imprime en consola la tabla de multiplicar', opts)
.command('crear', 'Genera un archivo con la tabla de multiplicar hasta el límite deseado.', opts)
.help()
.argv;

module.exports=
{
  argumentos
}
