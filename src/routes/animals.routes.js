import {Router} from "express";
import {getAnimais, getAnimalById, deleteAnimal, updateAnimal, createAnimal} from "../controllers/animals.controller.js";
 

const rotasAnimais = Router();
 
rotasAnimais.get('/', getAnimais);

rotasAnimais.get('/:id', getAnimalById);

rotasAnimais.delete('/:id', deleteAnimal);

rotasAnimais.put('/:id', updateAnimal);

rotasAnimais.post('/', createAnimal);

export default rotasAnimais;