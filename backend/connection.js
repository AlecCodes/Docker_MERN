require('dotenv').config()
const mongoose = require("mongoose")

const DATABASE_URL = process.env.DATABASE_URL //|| "mongodb://mongo:27017/AlecTodoAppTest"

mongoose.connect(DATABASE_URL)

mongoose.connection
    .on("open", () => console.log(`CONNECTED TO MONGOOSE : ${DATABASE_URL}`))
    .on("close", () => console.log(`CLOSED CONNECTION! : ${DATABASE_URL}`))
    .on("error", (error) => console.log(error))

module.exports = mongoose