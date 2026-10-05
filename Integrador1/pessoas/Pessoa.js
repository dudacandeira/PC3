import * as util from '../biblioteca/util.js';

export default class Pessoa {
  #nome;
  #email;

  constructor(nome, email) {
    this.setNome(nome);
    this.setEmail(email);
  }

  setNome(nome) {
    if (typeof nome === 'string' && nome.trim().length >= 2) {
      this.#nome = nome.trim();
      return true;
    }
    return false;
  }

  getNome() { 
    return this.#nome;
 }

  setEmail(email) {
    if (util.validarEmail(email)) {
      this.#email = email;
      return true;
    }
    return false;
  }

  getEmail() {
     return this.#email; 
  }
}