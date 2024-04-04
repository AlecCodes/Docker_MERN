const env = process.env.HOME || '/root'


if (env === '/root'){
    process.env.DATABASE_URL = "mongodb://mongo:27017/AlecTodoAppTest"
}

