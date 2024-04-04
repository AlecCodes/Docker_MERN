require("./config/config")
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const router = require('./controller/todos')

const PORT = process.env.PORT || 4000

//MIDDLEWARE
app.use(cors())
app.use(express.json())

console.log(process.env.DATABASE_URL)

//ROUTES

app.use("/api" , router)


app.listen(PORT, () => console.log(`Listening on ${PORT}!! XD`))