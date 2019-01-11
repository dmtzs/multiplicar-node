//Required
const fs = require('fs');

let data= '';

let creararchivo= async (base) =>
{

  if (!Number(base))//Poniendo Number verifico si es un número o no la base.
  {
    throw new Error('La base no es un número.');
    return;
  }

  tabla(base, data);

  return(data);
}



let tabla= (base, data) =>
{
  for (let i = 1; i <= 10; i++)
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
  creararchivo
}
