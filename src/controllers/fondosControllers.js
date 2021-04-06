const Fondos = require("../models/Fondos");

exports.getFondos = async (req, res) => {
  try {
    const fondos = await Fondos.find();
    res.json(fondos);
  } catch (error) {
    res.send({ msg: error });
  }
};

exports.postFondos = async (req, res) => {
  try {
    const fondoBody = new Fondos(req.body);
    await fondoBody.save();
    res.json(fondoBody);
  } catch (error) {
    res.send({ msg: error });
  }
};

exports.deleteDocuments = async (req, res) => {
  db.fondos.drop();
  res.json({ msg: "Eliminado correctamete" });
};
