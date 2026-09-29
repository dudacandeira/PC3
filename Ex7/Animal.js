import Cliente from "./Cliente.js";
import Prontuario from "./Prontuario.js";
import Veterinario from "./Veterinario.js";

 export default class Animal {

    #nome;
    #especie;
    #cliente;
    #prontuario;
    #veterinarios;

    constructor(nome, especie) {
        this.#nome = nome;
        this.#especie = especie;
        this.#cliente = null; // a ser preenchido
        this.#prontuario = null; // a ser preenchido
        this.#veterinarios = []; // lista vazia dos veterinarios
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
        return true;
    }

    getEspecie() {
        return this.#especie;
    }

    setEspecie(especie) {
        this.#especie = especie;
        return true;
    }

    getCliente() {
        return this.#cliente;
    }

    // definicao do cliente do animal
    setCliente(cliente) {

        // se for diferente da classe cliente retorna falso
        // e adiciona o parametro passado
        if (!(cliente instanceof Cliente)) {
            return false;
        }

        this.#cliente = cliente;

        // cria a referência Cliente -> Animal
        if (!cliente.getAnimais().includes(this)) {
            cliente.addAnimal(this);
        }

        return true;
    }

    getProntuario() {
        return this.#prontuario;
    }

    //definicao do prontuario
    setProntuario(prontuario) {

        if (!(prontuario instanceof Prontuario)) {
            return false;
        }

        // se for diferente, fica vazio
        this.#prontuario = prontuario;

        // cria a referência Prontuario -> Animal
        if (prontuario.getAnimal() !== this) {
            prontuario.setAnimal(this);
        }

        return true;
    }

    getVeterinarios() {
        return this.#veterinarios;
    }

    // definicao dos veterinarios em uma lista vazia
    setVeterinarios(veterinarios) {

        //verificar se é um array
        if (!Array.isArray(veterinarios)) {
            return false;
        }

        //conferencia da existencia real do veterinario
        for (let veterinario of veterinarios) {
            if (!(veterinario instanceof Veterinario)) {
                return false;
            }
        }

        this.#veterinarios = veterinarios;

        return true;
    }

    // criacao lista de veterinarios
    addVeterinario(veterinario) {

        // se o que foi passado nao for um vet, nao adiciona
        if (!(veterinario instanceof Veterinario)) {
            return false;
        }

        // para nao adicionar duas vezes
        if (!this.#veterinarios.includes(veterinario)) {
            this.#veterinarios.push(veterinario);
        }

        // cria a referência Veterinario -> Animal
        if (!veterinario.getAnimais().includes(this)) {
            veterinario.addAnimal(this);
        }

        return true;
    }

    listarVeterinarios() {

        console.log(`\nVeterinários de ${this.#nome}:`);

        for (let veterinario of this.#veterinarios) {
            console.log(`☆ ${veterinario.getNome()}`);
        }
    }
}