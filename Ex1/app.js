
const funcoes = require ('./conversores.js');
//requerimento puxando todas as funcoes criadas no conversores.js

//declaracao de variaveis dos exercicios

var celsius = 30, horas = 2, idade = 20, km = 3, distancia = 500, litros = 40;

console.log(funcoes.celsiusParaFahrenheit(celsius));
console.log(funcoes.horasParaMinutors(horas));
console.log(funcoes.idadeEmDias(idade));
console.log(funcoes.kmParaMetros(km));
console.log(funcoes.consumoMedio(distancia, litros));

//como executar: 
//node ./Ex1/app.js

