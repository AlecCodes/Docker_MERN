const express = require('express')
const app = express()
const Todo = require('./models/todo')
require('dotenv').config()

console.log(typeof process.env.DATABASE_URL)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on ${PORT}!! XD`))