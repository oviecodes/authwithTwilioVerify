

const express = require('express');
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')

const port = process.env.PORT || 3000
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/authWithTwilio', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log(`connected to mongodb`)
    })
    .catch(e => console.log(e))

//Routes

app.get('/', (req, res) => {
    res.status(200).send('welcome to the homepage')
})


//listen on port
app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})