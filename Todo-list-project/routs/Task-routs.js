const express = require("express");
const { postTask, getTasks, deleteTask } = require("../controller/tasks.js");
const router = express.Router();

router.route("/").post(postTask).get(getTasks);
router.route("/delete-task/:task").delete(deleteTask);
module.exports = router;
