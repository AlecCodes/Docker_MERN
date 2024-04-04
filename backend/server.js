const express = require('express')
const app = express()
const Todo = require('./models/todo')
require('dotenv').config()
const cors = require('cors')

const PORT = process.env.PORT || 3000

//MIDDLEWARE
app.use(cors())
app.use(express.json())

//ROUTES

app.get("/", async (req,res) => {
    res.json(await Todo.find({}))
})

app.post("/", async (req, res) => {
    const newTodo = await Todo.create(req.body)
    res.json(newTodo)
})

app.listen(PORT, () => console.log(`Listening on ${PORT}!! XD`))