import { Todo } from "../models/todo.models.js";

const addTodo = async function (req, res) {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({
      title: title,
      description: description,
    });
    todo.save();
    res.status(200).json({
      todo,
      message: "todo added successfully",
    });
  } catch (error) {
    console.log("Error while adding todo", error);
    throw error;
  }
};

const showTodo = async function (req, res) {
  try {
    const allTodo = await Todo.find({});
    res.status(200).json(allTodo);
  } catch (error) {
    console.log(error);
    // res.status(404).json(404 , "coulnot get todo items")
    throw error;
  }
};

const updateTodo = async function (req, res) {
  const state = res.body.completed;
};

export { addTodo, showTodo };
