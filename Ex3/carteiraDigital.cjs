class CarteiraDigital {
  
    //definir construtor para inicializacao das funcoes]
    constructor(){
        this.#titular = "";
        this.#saldo = 0; //incializa em com saldo zero 


        this.definirTitular = function(nome) {
          titular = nome;
        };
    
        // 2. Consultar Titular
        this.consultarTitular = function() {
          return titular;
        };
    
        // 3. Depositar Saldo
        this.depositar = function(valor) {
          if (valor > 0) {
            saldo += valor;
          }
        };
    
        // 4. Sacar Saldo
        this.sacar = function(valor) {
          if (valor > 0 && valor <= saldo) {
            saldo -= valor;
          }
        };
    
        // 5. Consultar Saldo
        this.consultarSaldo = function() {
          return saldo;
        };
    
        // 6. Exibir Informações
        this.exibirInformacoes = function() {
          console.log(`Titular: ${titular} | Saldo: R$ ${saldo.toFixed(2)}`);
        };
    }
}


  module.exports = CarteiraDigital;
