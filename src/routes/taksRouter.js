const express = require("express");
const {
  addTask,
  getTasks,
  editTask,
  removeTask,
} = require("../controllers/taskControllers");
const router = express.Router();

//api/task
router.post("/", addTask);
router.get("/", getTasks);
router.put("/:id", editTask);
router.delete("/:id", removeTask);

module.exports = router;
