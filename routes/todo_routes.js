const express = require('express');
const router = express.Router();
const {getTasks, postTasks, updateTasks, editTasks, deleteTasks, completeTasks} = require('../controllers/todo_controller')

// GET METHOD
router.get("/", getTasks);

//POST METHOD
router.post('/', postTasks);

//UPDATE
router.get("/edit/:id", editTasks)
router.put("/edit/:id", updateTasks)

//DELETE
router.get("/remove/:id", deleteTasks);

//COMPLETE
router.get("/complete/:id", completeTasks)

router.get("/about", function(req,res){
    res.render('about.ejs');
  })


module.exports = router
