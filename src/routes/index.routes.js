import { Router } from "express";
import rotasAnimais from "./animals.routes.js";

const rotas = Router();

rotas.use('/animais', rotasAnimais);

rotas.get('/', (req, res) => {
    return res.status(200).send({ message: "Servidor ok"});

});

export default rotas