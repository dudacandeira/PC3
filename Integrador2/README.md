# Exercício Integrador 02: Pessoa Jurídica, Inscrição Estadual e ES Modules

## Descrição
Pequeno sistema em JavaScript que organiza dados de Pessoas Jurídicas (PJ) e suas Inscrições Estaduais (IE). O projeto integra classes, encapsulamento, herança, relacionamento entre objetos, validação com 'instanceof' e organização em módulos (ESM).

A classe Pessoa do Exercício 1 foi reutilizada, mas de forma adaptada e a classe PJ herda dela. A Inscrição Estadual foi implementada de três formas para comparação: classe (IEclss), função fábrica (IEfunc()) e o objeto literal (IEjson).

## Estrutura do projeto
Integrador2/
├── objetos/
|   └── IE.mjs
├── pessoas/
│   ├── Pessoa.js
│   └── PJ.mjs
└── main.mjs
└── README.md

## Como executar
node Integrador2/main.mjs

## Resultado esperado
- Objeto inválido em setPJ() nas três implementações: false
- Objeto PJ verdadeiro em setPJ() nas três implementações: true
- Relatório final com os dados da Pessoa Jurídica e da Inscrição Estadual (com data em toLocaleString('pt-BR')) para IEclss, IEfunc() e IEjson.

## Desafios realizados
- Extra 1: setCNPJ() aceita somente CNPJ com 14 caracteres, retornando true ou false.
- Extra 2: duas PJs diferentes associadas a implementações diferentes de IE, recuperadas com getPJ().
- Avançado: função mostrarIE(ie), reutilizada para IEclss, IEfunc() e IEjson. Ela funciona nas três porque todas possuem os mesmos métodos (getNumero, getEstado, getDataRegistro, getPJ).

## Questões teóricas

**1. Qual a vantagem de fazer PJ herdar da classe Pessoa?**
Uma Pessoa Jurídica continua sendo uma pessoa, com alguns dados a mais (CNPJ e razão social). Com a herança, a PJ aproveita tudo o que Pessoa já tem (nome e e-mail) e só acrescenta o que é específico dela, sem criar tudo do zero.

**2. Por que não devemos copiar para PJ os métodos já implementados em Pessoa?**
Porque esses métodos já existem em Pessoa e são herdados por PJ. Copiá-los geraria duplicidade e dificultaria a manutenção, pois uma correção teria de ser feita em vários lugares. Com a herança, o código fica em um só lugar e basta instanciar a PJ para usá-lo.

**3. Qual a finalidade do operador instanceof no método setPJ()?**
Verificar se o objeto recebido foi criado a partir da classe PJ. Assim, o método só aceita objetos válidos e recusa qualquer outro, nesse caso retornando false.

**4. Qual a diferença entre if (pj) e if (pj instanceof PJ)?**
O if (pj) apenas verifica se existe um valor considerado verdadeiro, e qualquer objeto, mesmo inválido como { nome: 'Empresa Inválida' }, passaria. O if (pj instanceof PJ) verifica se o objeto realmente pertence à classe PJ.

**5. Qual a diferença entre a classe IEclss e a função fábrica IEfunc()?**
A IEclss é uma classe: um molde, e é usado com new, que guarda seus dados em atributos privados. A IEfunc() é uma função que cria e devolve um objeto, guardando os dados em variáveis locais da própria função.

**6. Como a função fábrica protege seus dados internos?**
Por meio da função (closure). As variáveis (numero, estado, dataRegistro, pj) só existem dentro de IEfunc(), e o código de fora só consegue acessá-las pelos métodos que a função retorna.

**7. Qual a diferença entre o objeto literal IEjson e um documento JSON?**
IEjson é um objeto JavaScript escrito diretamente no código, que pode ter métodos e usar this. JSON é um formato de texto para troca de dados, com regras próprias (como chaves entre aspas duplas) e sem funções.

**8. Qual a diferença entre exportação padrão e exportação nomeada?**
A exportação padrão (export default) permite apenas uma por arquivo e é importada sem chaves, com o nome que quisermos. As exportações nomeadas podem ser várias por arquivo e são importadas com chaves, usando o mesmo nome exportado. Exemplo: import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs'; do nosso exercício.

**9. Por que IEclss utiliza new, enquanto IEfunc() não utiliza?**
A classe é um molde, e o new é o que cria um objeto a partir dele. A função fábrica já cria e devolve o objeto por conta própria com o return, bastando chamá-la.

**10. Qual a vantagem de organizar as classes e estruturas em arquivos separados?**
O código fica mais organizado, mais fácil de manter e de encontrar, e cada arquivo tem uma responsabilidade. Também permite reutilizar partes em outros projetos, como a classe Pessoa do Exercício 1, sem copiar código.

**11. Como o relacionamento entre IE e PJ é representado no código?**
Cada Inscrição Estadual guarda uma referência a um objeto PJ (atributo #pj na classe, variável pj na função fábrica e propriedade pj no objeto literal). A associação é feita por setPJ() e recuperada por getPJ(): uma IE TEM UMA PJ.

**12. Por que instanceof Date pode ser utilizado mesmo sem termos criado a classe Date?**
Porque Date é uma classe nativa do JavaScript, que já vem pronta na linguagem.