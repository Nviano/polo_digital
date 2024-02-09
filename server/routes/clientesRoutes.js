//Importamos librería express
const express = require("express");

const {
  showCarrousel,
  showClientes,
  addClient,
  updateClient,
  getUpdate,
} = require("../controllers/clientesController");
//Routes sirve para modularizar y organizar rutas de manera mas efectiva, libreria express
const clientesRouter = express.Router();

clientesRouter.get("/", showClientes);

clientesRouter.get("/carrousel", showCarrousel);

clientesRouter.post("/registro", addClient);

clientesRouter.get("/update/:id", getUpdate);

clientesRouter.post("/update/:id", updateClient);

module.exports = clientesRouter;
