const mongoose = require('../connection')

const {Schema, model} = mongoose

const todoSchema = new Schema({
    name: String,
    isUrgent: Boolean
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo