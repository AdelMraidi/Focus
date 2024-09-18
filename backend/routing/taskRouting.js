const express = require("express");
const {
  getAllTasks,
  getTaskById,
  addTask,
  deleteTaskById,
  updateTask,
} = require("../controllers/taskController");

const taskRouting = express.Router();
taskRouting.get("/all", getAllTasks);
taskRouting.get("/:id", getTaskById);
taskRouting.post("/add", addTask);
taskRouting.delete("/:id", deleteTaskById);
taskRouting.put("/:id", updateTask);

module.exports = taskRouting;
