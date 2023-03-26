// import { connectToDb } from "../db/connect.js";

const { default: mongoose } = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "should contain name"],
    maxlengh: [25, "just 25 char"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
