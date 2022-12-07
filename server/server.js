const morgan = require("morgan");
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server started on port`);
});
