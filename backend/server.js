require('dotenv').config()

const express = require('express')
const app = express()

const todoRoutes = require('./routes/todoRoutes')
const authRoutes = require('./routes/authRoutes') 

const mongoose = require('mongoose')

const path = require('path')

const port = process.env.PORT

app.set('trust proxy', true)
app.use(express.json())

app.use(express.static(path.resolve(__dirname, 'build')));

app.use('/auth', authRoutes)
app.use('/todolist', todoRoutes)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(port, '::', () => {
    console.log('Server running at port ' + port)
})})
.catch( 
    (err) => console.log(err)
)
