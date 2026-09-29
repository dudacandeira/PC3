const CarteiraDigital = require('./carteiraDigital.cjs');

const minhaCarteira = new CarteiraDigital();

minhaCarteira.definirTitular('Duda Moraes');
minhaCarteira.depositar(200);

console.log(`Saldo consultado: R$ {minhaCarteira.consultarSaldo()}`);

minhaCarteira.sacar(50);

minhaCarteira.exibirInformacoes();


//node ./Ex3/main.js