import CarteiraDigital from './carteiraDigital.js';

const carteira = new CarteiraDigital();

carteira.definirTitular('Duda');
carteira.depositar(200);

console.log(carteira.consultarSaldo());

carteira.sacar(50);

CarteiraDigital.exibirInformacoes();