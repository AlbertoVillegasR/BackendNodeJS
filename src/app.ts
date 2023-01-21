import express from "express";
import clientes from "./controllers/clientes/clientes.controller"
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use('/common/clientes', clientes);
export default app;