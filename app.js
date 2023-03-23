const express = require('express');
const app = express();
const tasks = require('./routs/tasks')
const asyncWrapper = require('../starter/middleware/async')


const connectDB = require('./DB/Connect')
require ('dotenv').config()

const notFound = require('../starter/middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
//middleware

app.use(express.static('./public'))
app.use(express.json())



//routes
app.use('/api/v1/tasks', tasks);

app.use(notFound)
app.use(errorHandlerMiddleware)
const port = 3000;
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
    } catch (error){
        console.log(error)
    }
}

app.listen(port, console.log(`Server i listening on port ${port}...`))

start()