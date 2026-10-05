import Pessoa from './pessoas/Pessoa.js';
import Aluno from './pessoas/Aluno.js';
import Professor from './pessoas/Professor.js';

function mostrarDados(obj) {
  console.log(`Nome: ${obj.getNome()}`);
  console.log(`E-mail: ${obj.getEmail()}`);
  if (obj instanceof Aluno)
       console.log(`Matrícula: ${obj.getMatricula()}`);
  if (obj instanceof Professor) 
  console.log(`Disciplina: ${obj.getDisciplina()}`);
  console.log('-ㅤꨄ︎ -');
}

const pessoas = [
  new Pessoa('Maria Moraes', 'maria@email.com'),
  new Pessoa('J', 'joao-sem-arroba'),
];

const alunos = [
  new Aluno('Lua Souza', 'lua@email.com', '20260001'),
  new Aluno('Bruno Lima', 'bruno@email.com', '123'),
];

const professores = [
  new Professor('Carlos Mendes', 'carlos@ifb.edu.br', 'Cálculo 1'),
  new Professor('Débora Rocha', 'debora@gmail.com', 'Estágio'),
];

console.log('ㅤꨄ︎ RELATÓRIO FINAL ꨄ︎');
console.log('\n-- Pessoas --');   pessoas.forEach(mostrarDados);
console.log('-- Alunos --');      alunos.forEach(mostrarDados);
console.log('-- Professores --'); professores.forEach(mostrarDados);