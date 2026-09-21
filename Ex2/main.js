import {Conversor} from './conversores.js';

const conversor = new Conversor();

console.log (conversor.celsiusParaFahrenheit(25) + 'ºF');
console.log (conversor.kmParaMilhas(10) + ' milhas');
console.log (conversor.minutosParaHoras(150) + ' horas');

//para executar: node ./main.js