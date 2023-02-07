const express = require("express");
const taskRouts = require("./routs/Task-routs.js");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("."));

app.use("/tasks", taskRouts);

app.listen(3000, () => {
  console.log("on port 3000");
});
