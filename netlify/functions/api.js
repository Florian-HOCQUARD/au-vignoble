const mongoose = require('mongoose')
const routes = require('./routes/routes.js')
const dotenv = require('dotenv')
const express = require('express')
dotenv.config()

exports.handler = async function (event, context) {
  // your server-side functionality
  const PORT = process.env.PORT || 3000

  const app = express()

  app.use(express.json())

  mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  app.use(routes)

  app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
  })
}
