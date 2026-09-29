import Animal from "./Animal.js";

export default class Prontuario {

    #numero;
    #observacoes;
    #animal;

    constructor(numero, observacoes) {
        this.#numero = numero;
        this.#observacoes = observacoes;
        this.#animal = null; //um animal pode nao ter um prontuario 
    }

    getNumero() {
        return this.#numero;
    }

    setNumero(numero) {
        this.#numero = numero;
        return true;
    }

    getObservacoes() {
        return this.#observacoes;
    }

    setObservacoes(observacoes) {
        this.#observacoes = observacoes;
        return true;
    }

    getAnimal() {
        return this.#animal;
    }

    // definicao do animal do prontuario
    setAnimal(animal) {

        // se nao for um animal, nao adiciona
        if (!(animal instanceof Animal)) {
            return false;
        }

        this.#animal = animal;

        // cria a referência Animal -> Prontuario
        if (animal.getProntuario() !== this) {
            animal.setProntuario(this);
        }

        return true;
    }
}