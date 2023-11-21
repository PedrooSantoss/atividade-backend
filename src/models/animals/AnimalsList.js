export class AnimaisLista {
    constructor(){
        this.animais = [];
    }

    contador(){
        return this.animais.length;
    }
    addAnimal(animal){
        this.animais.push(animal);
    }
    getAnimais(){
        return this.animais;
    }
    getAnimalByI(id){
        return this.animais.find((animal) => animal.id === id);
    }
    deleteAnimal(id){
        this.animais = this.animais.filter((animal) => animal.id !== id);
    }
    updateAnimal(id, nome, idade, tipo, cor, url, statusVacinais){
        const animal = this.getAnimalByI(id);

        if(!animal){
            return null;}
        animal.nome = nome;
        animal.idade = idade;
        animal.tipo = tipo;
        animal.cor = cor;
        animal.url = url;
        animal.statusVacinais = statusVacinais;
        }
        createAnimal(animal){
            this.animais.push(animal);
        }
    }
