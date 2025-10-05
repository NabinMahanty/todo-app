const express = require("express");
const moment = require("moment");
const Todo = require("../models/Todo");
const router = express.Router();
const todo = require("../controllers/todo");
//home

router.get("/", todo.homeController);

//add

router.get("/add-todo", todo.addTodocontroller);

//update

router.get("/update-todo", todo.updateTodoController);
router.post("/update-todo/:id", todo.updateTodoPostController);

//delete

router.get("/delete-todo", todo.deleteTodocontroller);
router.get("/confirm-delete", todo.deletetodocontroller);

router.post("/add-todo", todo.addtodoController);

module.exports = router;
