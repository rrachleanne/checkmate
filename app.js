const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRouter = require('./routes/posts_routes');

//models
const TodoTask = require("./models/TodoTask");

const port = process.env.port || 3000;

// tom IS nice

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbConn = 'mongodb://localhost/blog_app'
// Set three properties to avoid deprecation warnings:
// useNewUrlParser: true
// useUnifiedTopology: true
// useFileAndModify: false
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database!');
        }
    });

app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render('todo.ejs');
    });

// app.use('/posts', postRouter);

app.use("/static", express.static("public"));



app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
});


app.use(express.urlencoded({ extended: true }));

//POST METHOD
app.post('/',async (req, res) => {
    const todoTask = new TodoTask({
    content: req.body.content
    });
    try {
    await todoTask.save();
    res.redirect("/");
    } catch (err) {
    res.redirect("/");
    }
    });