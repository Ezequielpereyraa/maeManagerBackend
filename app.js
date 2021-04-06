const express = require("express");
const connectDB = require("./src/DB");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ extends: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST, PATCH"); // ESTO PERMITE HACER ESTE TIPO DE PETICIONES
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// connect a la db
connectDB();

//importar las Rutas

app.use("/api/task", require("./src/routes/taksRouter"));
app.use("/api/fondos", require("./src/routes/fondosRouter"));

//puerto de la app

const host = "0.0.0.0";
const port = process.env.PORT || 3001;

app.listen(port, host, function () {
  console.log("Server started.......");
});
