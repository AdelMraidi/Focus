const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    description: { type: String, required: true },
    priority: { type: String, required: true },
    isFinished: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("task", taskSchema);
