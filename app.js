'use strict'
const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  // Send JSON
  res.send({ status: 'on' })
})

var pencils = []

app.post('/pencils', function pencilPost(req, res) {
  pencils[pencils.length] = req.query
  res.send('ok')
})

app.get('/pencils', function pencilGet(req, res) {
  res.send({pencils})
})


module.exports = app
