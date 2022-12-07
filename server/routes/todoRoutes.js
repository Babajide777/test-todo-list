const {
  createTodo,
  getAllTodos,
  deleteTodo,
} = require("../controllers/todoController");

const router = require("express").Router();

router.post("/create", createTodo);
router.get("/todos", getAllTodos);
router.delete("/deletetodo/:id", deleteTodo);

module.exports = router;
