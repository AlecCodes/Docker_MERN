require("./config/config")
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const router = require('./controller/todos')
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3000
const cookieParser = require('cookie-parser')

//MIDDLEWARE
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(express.json())

console.log(process.env.DATABASE_URL)

//ROUTES

app.use("/api" , router)


app.listen(PORT, () => console.log(`Listening on ${PORT}!! XD`))