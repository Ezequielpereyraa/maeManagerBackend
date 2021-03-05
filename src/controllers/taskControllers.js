const Task = require("../models/Task");

exports.addTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
  } catch (error) {
    res.send(error);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.send(allTasks);
  } catch (error) {
    res.send(error);
  }
};

exports.editTask = async (req, res) => {
  try {
    let task = Task.findById(req.params.id);
    if (!task) return res.status(400).json({ msg: "No existe la Tarea" });
    // Crear un objeto con la nueva informaciónk
    const updateTask = req.body;
    task = await Task.findByIdAndUpdate({ _id: req.params.id }, updateTask, {
      new: true,
    });

    res.json(task);
  } catch (error) {
    res.send(error);
  }
};

exports.removeTask = async (req, res) => {
  try {
    const taskRemove = Task.findById(req.params.id);

    if (!taskRemove)
      return res.status(400).json({ msg: "No existe la tarea a eliminar" });

    await Task.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Tarea Eliminada" });
  } catch (error) {
    res.send(error);
  }
};
