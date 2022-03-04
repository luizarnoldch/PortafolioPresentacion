const express = require('express')
const app = express()
const mysql = require('mysql')

app.get('/',(req,res) => {
  res.send('')
})

app.post('/',(req,res) => {
  const body = req.body
})

app.listen(3000,
  console.log("escuchando en el puerto 3000"))