const moment = require("moment");
const Todo = require("../models/Todo");

const homeController = async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.locals.moment = moment;
    res.render("index", { todos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTodocontroller = (req, res, next) => {
  try {
    res.render("new-todo");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodoController = async (req, res, next) => {
  try {
    const { id } = req.query;
    const todo = await Todo.findById(id);
    res.render("updatetodo", { todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodoPostController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    await Todo.findByIdAndUpdate(id, { title, desc });
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteTodocontroller = (req, res, next) => {
  try {
    const { id } = req.query;
    res.render("deleteTodo", { id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addtodoController = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    const newTodo = new Todo({ title, desc });
    await newTodo.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletetodocontroller = async (req, res, next) => {
  try {
    const { id, confirm } = req.query;
    if (confirm === "true") {
      await Todo.findByIdAndDelete(id);
    }
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  homeController,
  addTodocontroller,
  updateTodoController,
  deleteTodocontroller,
  addtodoController,
  updateTodoPostController,
  deletetodocontroller,
};
