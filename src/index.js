//Este es el encargado de correr toda la aplicacion, luego aqui llamamos la coneccion con express

const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
  console.log('Server on port 3000')
})