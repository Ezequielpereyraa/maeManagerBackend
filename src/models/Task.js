const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    fecha: {
      type: String,
      trim: true,
    },
    hora: {
      type: String,
      trim: true,
    },
    fechaDeEntrega: {
      type: String,
      trim: true,
    },
  },
  { versionKey: false, timestamps: false }
);

module.exports = mongoose.model("Task", TasksSchema);
