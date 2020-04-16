const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'))

const todoRoute = require('./routes/todos')
app.use('/todos', todoRoute)


const { db } = require('./db')
db.sync()
  .then(() => {
    app.listen(6543)
  })
  .catch((err) => {
    console.error(err)
  })