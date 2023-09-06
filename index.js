const express = require('express')
const app = express()
const port =8000

//Esto es un callback
app.listen(port, () => {
  console.log(`Estamos Usando el Puerto: ${port}`)
})