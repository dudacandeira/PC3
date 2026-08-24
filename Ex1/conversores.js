
function celsiusParaFahrenheit(celsius){
  let F = (9/5) * celsius + 32;
  return F;
}

function horasParaMinutors(horas){
  let Minutos = horas * 60;
  return Minutos;
}

function idadeEmDias(idade){
  let Dias = idade * 365;
  return Dias;
}

function kmParaMetros(km){
  let Metros = km * 1000;
  return Metros;
}

function consumoMedio(distancia,litros){
  let Consumo = distancia/litros;
  return Consumo;
}

module.exports = {celsiusParaFahrenheit, horasParaMinutors, idadeEmDias, kmParaMetros, consumoMedio}