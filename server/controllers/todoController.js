const { createNewTodo, getTodos } = require("../services/todoService");
const { responseHandler } = require("../utils/responseHandler");

const createTodo = async (req, res) => {
  let saveTodo = await createNewTodo(req.body);

  return saveTodo[0]
    ? responseHandler(res, "Todo saved successfully", 201, true, saveTodo[1])
    : responseHandler(res, "Error saving Todo", 400, false, "");
};

const getAllTodos = async (req, res) =>
  responseHandler(res, "All todos", 200, true, await getTodos());

module.exports = {
  createTodo,
  getAllTodos,
};
