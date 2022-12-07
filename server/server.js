const morgan = require("morgan");
const express = require("express");
const { connectDB } = require("./config/db");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Test TOdo-List API running");
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(() => console.log("Database Connection failed"));
