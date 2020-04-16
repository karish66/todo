const express = require('express')
const port = process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'))

const todoRoute = require('./routes/todos')
app.use('/todos', todoRoute)


const { db } = require('./db')
db.sync()
  .then(() => {
    app.listen(port)
  })
  .catch((err) => {
    console.error(err)
  })