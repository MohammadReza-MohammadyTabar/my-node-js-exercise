const express = require("express");
const { getTasks, postTask, deleteTask } = require("../controller/tasks");
const router = express.Router();

router.route("/").post(postTask).get(getTasks);
router.route("/delete-task/:task").delete(deleteTask);

module.exports = router;
