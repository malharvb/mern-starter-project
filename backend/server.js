require('dotenv').config()

const express = require('express')
const app = express()

const todoRoutes = require('./routes/todoRoutes')
const authRoutes = require('./routes/authRoutes') 

const mongoose = require('mongoose')

const port = process.env.PORT

app.use(express.json())

app.use('/auth', authRoutes)
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