//Required
const fs = require('fs');
const colors= require('colors');

let data= '';

/*Función que enlista la tabla en la terminal.*/
let listartab= (base, limite) =>
{

  console.log('====================='.green);
  console.log(`Tabla de ${base}`.green);
  console.log('====================='.green);
  for (var i = 1; i <=limite ; i++)
  {
    let resul= base*i;

    let expresion= `${base} * ${i}= ${resul}`
    console.log(expresion);
  }
}

/*Función que crea el archivo.*/

let creararch= async (base, limite) =>
{

  if (!Number(base))//Poniendo Number verifico si es un número o no la base.
  {
    throw Error('La base no es un número.');
    return;
  }

  tabla(base, data, limite);

  return data;
}



let tabla= (base, data, limite) =>
{
  for (let i = 1; i <= limite; i++)
  {
    let resul= base*i;

    data+= `${base} * ${i}= ${resul}\n`;
  }

  fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) =>
  {
  if (err)
    throw err;
  else
  {
    console.log(`El archivo tabla-${base} ha sido creado exitosamente.`);
  }
  });
}

module.exports=
{
  creararch,
  listartab
}
