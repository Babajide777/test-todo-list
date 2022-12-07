const { createTodo, getAllTodos } = require("../controllers/todoController");

const router = require("express").Router();

router.post("/create", createTodo);
router.get("/todos", getAllTodos);

module.exports = router;
