const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

//Middlewares
app.use(bodyparser.json())
app.use(cors());

//import routes
const postsRoute = require('./routes/posts');

//Middlewares
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send("we are home");
})

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, 
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("connected to db")
    );

app.listen(3000);
