class CarteiraDigital{
    #titular
    #saldo

    constructor(){
        this.#saldo = 0;
        this.#titular = "Não definido";
    }

    definirTitular(nome){
        if (nome){
            this.#titular = nome;
            return true;
        }
        else {
            return false;
        }
    }

    consultarTitular(){
        if (this.#titular){
            this.#titular = #titular.nome;
            console.log(`Titular: ${this.#titular}`);
        }
        else {
            console.log(`Nenhum titular encontrado!`);
        }

    }

    depositar(valor){
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`O valor R$${valor} foi depositado com sucesso na conta ${this.#titular}`);
            return true;
        }
        else {
            console.log(`Erro no depósito! Tente novamente.`)
            return false;
        }
    }

    sacar(valor){
        if (this.#saldo >= valor){
            this.#saldo -= valor;
            console.log (`Você ${this.#titular} realizou um saque no valor de R$ ${valor}`);
            return true;
        }
        else {
            console.log (`Saldo insuficiente.`);
            return false;
        }

    }

    consultarSaldo(){
        console.log (`Saldo dísponível: R$ ${this.#saldo}`);
        return true;
    }

    exibirInformacoes(){
        console.log(`Informações:`);
        console.log(`Titular: ${this.#titular}`);
        console.log(`Saldo disponível: ${this.#saldo}`);        
    }
}

export default CarteiraDigital;