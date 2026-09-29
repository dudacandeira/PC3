//importar a classe Animal pois é um parametro do cliente
import Animal from "./Animal.js";

export default class Cliente {
    #nome;
    #telefone;
    #animais;

    //nao esquecer do construtor, passando os parametros exclusivos da classe
    //e uma lista vazia de animais que vai ser criada
    constructor(nome, telefone){
        this.#nome = nome;
        this.#telefone = telefone;
        this.#animais = [];
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
        return true;
    }

    getTelefone() {
        return this.#telefone;
    }

    setTelefone(telefone) {
        this.#telefone = telefone;
        return true;
    }

    //vai retornar a lista
    getAnimais() {
        return this.#animais;
    }

    //funcao para definir a lista dos animais
    setAnimais(animais) {

        // !Array.isArray significa se o paramentro passado NÃO é um array
        if (!Array.isArray(animais)) {
            return false;
        }

        //funcao para garantir que que todos da lista pertencem a classe Animal
        for (let animal of animais) {
            if (!(animal instanceof Animal)) {
                return false;
            }
        }

        this.#animais = animais;
        return true;
    }

    //funcao PRINCIPAL, que faz a conexao entre as classes
    addAnimal(animal) {

        // 1- verifica se é realmente um Animal
        if (!(animal instanceof Animal)) {
            return false;
        }

        // 2- evita cadastrar o mesmo animal duas vezes
        // usa o push para adicionar caso ele nao exista na lista
        if (!this.#animais.includes(animal)) {
            this.#animais.push(animal);
        }

        // cria a referência Animal -> Cliente
        // batendo os dados de animal e cliente respectivos
        if (animal.getCliente() !== this) {
            animal.setCliente(this);
        }

        return true;
    }

    //funcao para mostrar a lista
    listarAnimais() {

        console.log(`Cliente: ${this.#nome}`);
        console.log("\nAnimais:");

        //mostrar a lista na linha de baixo
        for (let animal of this.#animais) {
            console.log(`★ ${animal.getNome()}`);
        }
    }
}