const {
  createTodo,
  getAllTodos,
  deleteTodo,
  editTodo,
} = require("../controllers/todoController");

const router = require("express").Router();

router.post("/create", createTodo);
router.get("/todos", getAllTodos);
router.delete("/deletetodo/:id", deleteTodo);
router.put("/edit/:id", editTodo);

module.exports = router;
