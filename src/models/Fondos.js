const mongoose = require("mongoose");

const FondosSchema = mongoose.Schema(
  {
    nombre: String,
    monto: Number,
    medioDePago: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Fondos", FondosSchema);
