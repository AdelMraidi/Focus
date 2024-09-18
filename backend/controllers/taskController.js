const task = require("../models/task");

module.exports.getAllTasks = async (req, res) => {
  const allTasks = await task.find();
  return res.status(200).json(allTasks);
};

module.exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  const taskById = await task.findById(id);
  return res.status(200).json(taskById);
};

module.exports.addTask = async (req, res) => {
  const { name, description, priority, isFinished } = req.body;
  const newTask = new task({
    name,
    description,
    priority,
    isFinished,
  });
  await newTask.save();
  return res.status(200).json(newTask);
};

module.exports.deleteTaskById = async (req, res) => {
  const { id } = req.params;
  await task.findByIdAndDelete(id);
  return res.status(200).json({ message: "Task deleted !" });
};

module.exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, description, priority, isFinished } = req.body;
  await task.findByIdAndUpdate(id, {
    name,
    description,
    priority,
    isFinished,
  });
  return res.status(200).json({ message: "Task updated !" });
};
