import Pessoa from './Pessoa.js';
import * as util from '../biblioteca/util.js';

export default class Aluno extends Pessoa {
  #matricula;

  constructor(nome, email, matricula) {
    super(nome, email); // lembrar da classe mãe para criação
    this.setMatricula(matricula);
  }

  setMatricula(matricula) {
    if (util.validarMatricula(matricula)) {
      this.#matricula = matricula;
      return true;
    }
    return false;
  }
  
  getMatricula() {
    return this.#matricula; 
  }
}