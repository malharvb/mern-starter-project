require('dotenv').config()

const express = require('express')
const app = express()

const todoRoutes = require('./routes/todoRoutes') 

const mongoose = require('mongoose')

const port = process.env.PORT

app.use(express.json())

app.use('/todolist', todoRoutes)

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(port, () => {
    console.log('Server running at port ' + port)
})})
.catch( 
    (err) => console.log(err)
)