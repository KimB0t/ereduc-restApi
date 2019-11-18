const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

app.use(bodyparser.json())

//import routes
const postsRoute = require('./routes/posts');


//Middlewares
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send("we are home");
})

app.listen(3000);
