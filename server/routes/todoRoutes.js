const { createTodo } = require("../controllers/todoController");

const router = require("express").Router();

router.post("/create", createTodo);

module.exports = router;
