const express = require('express');
const app = express()
 
app.get('/', function (req, res) {
  res.send('Soy el index')
})
app.get('/rara', function (req, res) {
    res.send('Soy la peticion rara')
  })  
  app.get('/carro', function (req, res) {
    let carro = {
        placa:'ABC123',
        modelo:'2019',
        marca:'Mazda',
        puertas: 4
    }
    res.send(carro)
  })
  
app.listen(3000)

console.log("Server en el puerto 3000");
