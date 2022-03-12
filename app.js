const express = require('express')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
mongoose.connect('mongodb://127.0.0.1/nodeblog_db');

app.use( express.static('public'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set("views", "./views");

const main = require('./routes/main')
app.use('/',main)

const posts = require('./routes/posts')
app.use('/posts',posts)

app.listen(port,hostname, () => {
    console.log(`Server is running, http://${hostname}:${port}/`)
})