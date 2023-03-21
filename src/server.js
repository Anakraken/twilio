// codigo de servidos, es decir solo lo de express

const express = require('express');
const app = express();
const path = require('path');
let exphbs = require('express-handlebars');

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
//Engine define el motor de plantillas (un motor de platillas divide el html en secciones)

app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  //le decimos que la carpeta lauots esta dentro de la carpeta views
  layoutsDir: path.join(app.get('views') + '/layouts'),
  partialsDir: path.join(app.get('views') + '/partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
module.exports = app;

//MIDDLEWARES

//ROUTES
app.use(require('./routes/index'));

//STATIC FILES


module.exports = app;
