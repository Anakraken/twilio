// coneccion de la base de datos (modulo de mongoose)
//Mongoose NO ES la base de datos, es solo el modulo de coneccion

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smsdb', {

}).then(db => console.log('DB is coneccted'))
  .catch(err => console.log("Error:", err))