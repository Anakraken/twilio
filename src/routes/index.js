//Este es un enrutador. Recibe las urls que el servidor puede recibir y realiza cierta funcion a partir de los controladores

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render("index")
  // res.send("HELLO WORLD")
})

module.exports = router;