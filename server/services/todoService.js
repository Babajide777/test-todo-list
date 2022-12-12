const Todo = require("../models/todoModel");
const { translateError } = require("../utils/mongo_helper");

const createNewTodo = async ({ todo }) => {
  try {
    let newTodo = new Todo({ todo });
    if (await newTodo.save()) {
      return [true, newTodo];
    } else {
      return [false, "todo could not be saved"];
    }
  } catch (err) {
    return [false, translateError(err)];
  }
};

const getTodos = async () => await Todo.find();

const deleteATodo = async (id) => await Todo.findByIdAndDelete(id);

const editATodo = async (id, todo) =>
  await Todo.findByIdAndUpdate(id, { todo }, { new: true });

module.exports = { createNewTodo, getTodos, deleteATodo, editATodo };
