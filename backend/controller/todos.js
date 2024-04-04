const express = require("express")
const Todo = require("../models/todo")
const router = express.Router()

router.get("/", async (req,res) => {
    res.json(await Todo.find({}))
})

router.post("/", async (req, res) => {
    const newTodo = await Todo.create(req.body)
    res.json(newTodo)
})

module.exports = router