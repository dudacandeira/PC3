## Descrição
Sistema acadêmico em JavaScript que cadastra pessoas, alunos e professores,
validando os dados com uma biblioteca reutilizável.

## Estrutura do projeto
```
Integrador1/
├── biblioteca/util.js
├── pessoas/Pessoa.js
├── pessoas/Aluno.js
├── pessoas/Professor.js
└── main.js
└── README.md
```

## Como executar
cd Integrador1
node main.js

## Decisões de implementação
- Foi usado ES Modules (import/export) em vez de require, porque o ambiente utilizado (StackBlitz) está configurado assim, e foi o único método que funcionou com os outros exercícios.
- Regra da matrícula: 8 dígitos numéricos.
- Validação de CPF com cálculo dos dígitos verificadores.
- Desafios extras foram feitos:
1. validarEmail com .com/.edu.br
2. mostrarDados

## Questões teóricas
**1. Qual a diferença entre módulo e classe?**
Módulo é um arquivo que organiza e exporta código (funções, classes, variáveis) para ser importado em outros arquivos, o que permite reutilizar sem repetir.
Classe é um molde para criar objetos, com atributos e métodos, e permite herança. O módulo organiza o projeto em arquivos e a classe define a estrutura dos objetos.

**2. Por que utilizar encapsulamento?**
Para proteger os dados. Os atributos privados (#) só podem ser alterados pelos métodos da própria classe, o que obriga a passar pela validação dos setClass. Assim, nenhum valor inválido é gravado direto no objeto.

**3. Qual a vantagem de reutilizar funções em uma biblioteca?**
Evita criar a mesma função várias vezes e gerar inconsistências no código. Além disso, se a regra mudar, é preciso alterar em um só lugar.

**4. Para que serve super?**
Serve para acessar a classe mãe. super(...) chama o construtor dela e super.metodo() chama um método da mãe, mesmo quando a filha o sobrescreveu, como fizemos no super.setEmail(email) na classe Professor, que usamos a função e adicionamos, ou seja, sobrescrevemos.

**5. Qual a diferença entre herança e sobrescrita?**
Herança é a classe filha receber os atributos e métodos da classe mãe. Sobrescrita é a filha redefinir um método herdado, com o mesmo nome só que com outro comportamento, como o setEmail do Professor, que só aceita e-mails terminados em .edu.br.

**6. Por que a validação do e-mail deve ocorrer dentro de setEmail() utilizando a biblioteca?**
Porque o set é o único caminho para definir/gravar o e-mail, então nenhum valor inválido é armazenado, nem por engano, porque ja definimos. Ao usar a função vinda da biblioteca, a regra de validação fica em um só lugar, sem repetir código em cada classe.

**7. Em quais situações utilizar && e ||?**
O && (E) é usado quando todas as condições precisam ser verdadeiras ao mesmo tempo, já o || (OU) é usado quando basta uma das condições ser verdadeira. Exemplo do validarEmail: email.includes('@') && (email.endsWith('.com') || email.endsWith('.edu.br')), nesse caso precisa que seja somente um dos dois casos verdadeiro para retornar algum, e para o primeiro uso existir precisa cumprir duas exigências.

## Exemplo de saída
- node main.js
ㅤꨄ︎ RELATÓRIO FINAL ꨄ︎

-- Pessoas --
Nome: Maria Moraes
E-mail: maria@email.com
-ㅤꨄ︎ -
Nome: undefined
E-mail: undefined
-ㅤꨄ︎ -
-- Alunos --
Nome: Lua Souza
E-mail: lua@email.com
Matrícula: 20260001
-ㅤꨄ︎ -
Nome: Bruno Lima
E-mail: bruno@email.com
Matrícula: undefined
-ㅤꨄ︎ -
-- Professores --
Nome: Carlos Mendes
E-mail: carlos@ifb.edu.br
Disciplina: Cálculo 1
-ㅤꨄ︎ -
Nome: Débora Rocha
E-mail: undefined
Disciplina: Estágio
-ㅤꨄ︎ -