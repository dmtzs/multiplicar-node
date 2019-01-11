//Required`s.
//const fs = require('fs');//Se ocupa para poder manejar archivos.
//const fs = require('expres'); -> plug ins de node.
//const fs = require('../fs'); -> archivos nuestros que ponemos en node.


/*let data= '';

let tabla= (base, data) =>
{
  for (let i = 1; i <= 10; i++)
  {
    let resul= base*i;

    data+= `${base} * ${i}= ${resul}\n`;
  }

  fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) =>
  {
  if (err) throw err;
  console.log(`El archivo tabla-${base} ha sido creado exitosamente.`);
  });
}*/


/*Si se le pone const y después llaves a eso se le llama destructuración.
*En este caso lo que pongo dentro es el objeto que contiene la función a ejecutar indicada que está en el otro archivo.*/
const {creararchivo}= require('./multiplicar/multiplicar.js');//require es para después poner la ruta del archivo que necesito.
let base= 'fg';

creararchivo(base)
  .then(archivo => console.log(`Archivo creado: ${archivo}`))//Se pone el .then porque es lo que va a hacer en caso de retornar la promesa de manera exitosa.
  .catch(err => console.log(err));//Se pone el .catch en caso de dar error el retorno de la promesa.
