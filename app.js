const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRouter = require('./routes/posts_routes');

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

<<<<<<< HEAD
app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render('todo.ejs');
    });

// app.use('/posts', postRouter);

app.use("/static", express.static("public"));

=======
app.get('/', (req, res) => {
    console.log("get on /");
    res.send("Hello");
})
>>>>>>> d3cfd69b80c7aa8cbc42337cb048c379096e65ea


app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
});