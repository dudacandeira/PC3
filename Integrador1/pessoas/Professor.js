import Pessoa from './Pessoa.js';

export default class Professor extends Pessoa {
  #disciplina;

  constructor(nome, email, disciplina) {
    super(nome, email); // classe mãe novamente
    this.setDisciplina(disciplina);
  }

  // sobrescrita que fazemos para que só aceite e-mails .edu.br
  setEmail(email) {
    if (typeof email === 'string' && email.endsWith('.edu.br')) {
      return super.setEmail(email);
    }
    return false;
  }

  setDisciplina(disciplina) {
    if (typeof disciplina === 'string' && disciplina.trim() !== '') {
      this.#disciplina = disciplina.trim();
      return true;
    }
    return false;
  }
  getDisciplina() { return this.#disciplina; }
}