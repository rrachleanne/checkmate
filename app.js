const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRouter = require('./routes/posts_routes');
const todoRouter = require('./routes/todo_routes');
const methodOverride = require('method-override')


//models
const TodoTask = require("./models/TodoTask");

const port = process.env.port || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(methodOverride('_method'));

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

// // GET METHOD
// app.get("/", (req, res) => {
//     TodoTask.find({}, (err, tasks) => {
//     res.render("todo.ejs", { todoTasks: tasks });
//     });
//     });

app.use('/', todoRouter);

app.use("/static", express.static("public"));



app.listen(port, () => {
    console.log(`To-do express app listening on port ${port}`);
});


app.use(express.urlencoded({ extended: true }));

// //POST METHOD
// app.post('/',async (req, res) => {
//     const todoTask = new TodoTask({
//     content: req.body.content
//     });
//     try {
//     await todoTask.save();
//     res.redirect("/");
//     } catch (err) {
//     res.redirect("/");
//     }
//     });

//     //UPDATE
// router
// .get("/edit/:id")
// .get((req, res) => {
// const id = req.params.id;
// TodoTask.find({}, (err, tasks) => {
// res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
// });
// })
// .post((req, res) => {
// const id = req.params.id;
// TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
// if (err) return res.send(500, err);
// res.redirect("/");
// });
// });

