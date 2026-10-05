export function validarEmail(email) {
    if (typeof email !== 'string') 
        return false;

    //extra
    return email.includes('@') && (email.endsWith('.com') || email.endsWith('.edu.br'));  }
  
  export function validarMatricula(matricula) {
    if (typeof matricula !== 'string') 
        return false;

    return matricula.length === 8 && !isNaN(matricula);
  }
  
  export function validarCPF(cpf) {
    if (typeof cpf !== 'string') 
        return false;
  
    const numeros = cpf.replace(/\D/g, ''); // tira pontos e traços

    if (numeros.length !== 11) 
        return false;

    if (/^(\d)\1{10}$/.test(numeros)) 
        return false;
  
    const calcularDigito = (base) => {
      let soma = 0;
      for (let i = 0; i < base.length; i++) {
        soma += Number(base[i]) * (base.length + 1 - i);
      }
      const resto = (soma * 10) % 11;
      return resto === 10 ? 0 : resto;
    };
  
    const d1 = calcularDigito(numeros.slice(0, 9));
    const d2 = calcularDigito(numeros.slice(0, 10));
    return d1 === Number(numeros[9]) && d2 === Number(numeros[10]);
  }