const { model } = require("../models/post");

const TodoTask = require('../models/TodoTask') 

const getTasks =(req, res) => {
    TodoTask.find({}, (err, tasks) => {
    res.render("todo.ejs", { todoTasks: tasks });
    });
    }

const postTasks = async (req, res) => {
        const todoTask = new TodoTask({
        content: req.body.content
        });
        try {
        await todoTask.save();
        res.redirect("/");
        } catch (err) {
        res.redirect("/");
        }
        }

     const editTasks = (req, res) => {
            const id = req.params.id;
            TodoTask.find({}, (err, tasks) => {
            res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
            });
        }
    

     const updateTasks = (req, res) => {
                const id = req.params.id;
                TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
                if (err) return res.send(500, err);
                res.redirect("/");
                });
            }

    const deleteTasks = (req, res) => {
        const id = req.params.id;
        TodoTask.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
        });
        }

    const completeTasks = (req, res) => {
        const id = req.params.id;
        TodoTask.findByIdAndUpdate(id, { completed: true }, err => {
            if (err) return res.send(500, err);
            res.redirect("/"); 
        })
    }

    module.exports = {
        getTasks,
        postTasks,
        editTasks,
        updateTasks,
        deleteTasks,
        completeTasks
    }