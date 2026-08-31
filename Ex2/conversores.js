class Conversor {

    construtor(){
    }

    celsiusParaFahrenheit(celsius){
        let fahrenheit = (9/5) * celsius + 32;
        return fahrenheit;
    }

    kmParaMilhas(km){
        let milhas = km * 0.621371;
        return milhas;
    }

    minutosParaHoras(minutos){
        let horas = minutos/60;
        return horas;
    }
}

 //export pedindo um construtor
 export {Conversor}