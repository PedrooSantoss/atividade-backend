import {Animal} from '../models/animals/Animal.js';
import { AnimaisLista } from '../models/animals/AnimalsList';

const AnimaisLista = new AnimaisLista();

function verificarImg(url){
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    }else{
        return false;
    }
    }

    export const getAnimais = (req, res) => {
        const animal = AnimaisLista.getAnimais();
        const {tipo} = req.query;

        if(tipo){
            const animaisFiltrados = animal.filter((animal) => animal.tipo === tipo);
            if (animaisFiltrados.length > 0){
                return res.status(200).send({ message: `animais encontrados, o numero de animais é ${AnimaisLista.contador()}`, animaisFiltrados });
            }else{
                return res.status(404).send({ message: "animais não encontrado"});
            }
        }

        if (!animal){
            return res.status(404).send({ message: "animais não encontrado"});
        }
        return res.status(200).send({ message: `animais encontrados, o numero de animais é ${AnimaisLista.contador()}`, animal });
    
    }

    export const getAnimalById = (req, res) => {
        const { id } = req.params;
        const animal = AnimaisLista.getAnimalByI(id);
        if (!animal){
            return res.status(404).send({ message: "animal não encontrado"});
        }
        return res.status(200).send({ message: "animal encontrado", animal });
    }

    export const deleteAnimal = (req, res) => {
        const { id } = req.params;
        const animal = AnimaisLista.getAnimalByI(id);
        if (!animal){
            return res.status(404).send({ message: "animal não encontrado"});
        }
        AnimaisLista.deleteAnimal(id);
        return res.status(200).send({ message: "animal deletado", animal });
    }

    export const updateAnimal = (req, res) => {
        const { id } = req.params;
        const { nome, idade, tipo, cor, url, statusVacinais } = req.body;
        const animal = AnimaisLista.getAnimalByI(id);
        if (!animal){
            return res.status(404).send({ message: "animal não encontrado"});
        }
        AnimaisLista.updateAnimal(id, nome, idade, tipo, cor, url, statusVacinais);
        return res.status(200).send({ message: "animal atualizado", animal });
    }

    export const createAnimal = (req, res) => {
        const { nome, idade, tipo, cor, url, statusVacinais } = req.body;
        const animal = new Animal(nome, idade, tipo, cor, url, statusVacinais);
         AnimaisLista.createAnimal(animal);
        return res.status(200).send({ message: "animal criado", animal });
    }