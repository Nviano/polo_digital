//Importamos librería express
const express = require("express");
const cors = require("cors");
//Importamos libreria dotenv para utilizar .env
const dotenv = require("dotenv");
//Middleware para la generacion de registros, registra solicitudes HTTP; direccion IP,Metodo HTTP utilizado.
const userRouter = require("./routes/userRoutes");
const clientesRouter = require("./routes/clientesRoutes");
const gestionRouter = require("./routes/gestionRoutes");
const db = require("./services/mysql");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/user", userRouter);
app.use("/clientes", clientesRouter);
app.use("/gestion", gestionRouter);
app.use("/eventos", gestionRouter);

//Levantamos el puerto 8000;
app.listen(PORT, () => console.log(`Server in port ${PORT}`));

db.createConnection();
