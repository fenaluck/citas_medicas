// incorporando las librerias
const express = require('express');
const moment = require('moment');
const axios = require("axios");
const chalk = require('chalk');
const uuid = require('uuid');
const app = express();

let usuarios=[];

console.log(usuarios);
// definir las rutas

app.get('/',async(req, res)=>{
  
  console.log(usuarios[0]);
  return res.send('sdfg')

})
async function getDatos(usuarios){
  const tiempo = moment().format('MMMM Do YYYY, hh:MM:SSa');
  let id = uuid.v4();
  id = id.substr(id.length -6);
  let retorno =[];
  
  for (usuario of usuarios){
    retorno.push(`Nombre: ${usuario.name.first} - Apellido: ${usuario.name.last} - Id:${id} - Timestamp: ${tiempo}`)
  }
  return retorno;

}

(async()=> {
  usuarios = await axios.get('https://randomuser.me/api/?results=10');
  usuarios = usuarios.data.results;
  usuarios = getDatos(usuarios);

  app.listen(3000, ()=>{
    console.log(chalk.blue.bgGreen('servidor funcionando en el puerto 3000'));
    console.log(usuarios);
  })

})()
