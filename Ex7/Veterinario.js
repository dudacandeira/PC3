import Animal from "./Animal.js";

export default class Veterinario {

    #nome;
    #crmv;
    #animais;

    constructor(nome, crmv) {
        this.#nome = nome;
        this.#crmv = crmv;
        this.#animais = []; //pode atender mais de um animal
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
        return true;
    }

    getCRMV() {
        return this.#crmv;
    }

    setCRMV(crmv) {
        this.#crmv = crmv;
        return true;
    }

    getAnimais() {
        return this.#animais;
    }

    // definicao da lista dos animais
    setAnimais(animais) {

        // se nao for um array, nao adiciona
        if (!Array.isArray(animais)) {
            return false;
        }

        //se nao for um animal, nao adiciona
        for (let animal of animais) {
            if (!(animal instanceof Animal)) {
                return false;
            }
        }

        this.#animais = animais;

        return true;
    }

    addAnimal(animal) {

        if (!(animal instanceof Animal)) {
            return false;
        }

        // evitar repeticao, se nao tiver adicionado, adiciona com o push
        if (!this.#animais.includes(animal)) {
            this.#animais.push(animal);
        }

        // cria a referência Animal -> Veterinario
        if (!animal.getVeterinarios().includes(this)) {
            animal.addVeterinario(this);
        }

        return true;
    }
}