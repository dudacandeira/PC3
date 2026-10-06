import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';
import PJ from './pessoas/PJ.mjs';

const pj1 = new PJ();
pj1.setNome('Padaria Pão Quente');        // método herdado de Pessoa
pj1.setEmail('contato@paoquente.com.br'); // método herdado de Pessoa
pj1.setCNPJ('12345678000199');            // 14 caracteres
pj1.setRazaoSocial('Pão Quente Ltda');

const pj2 = new PJ();
pj2.setNome('Tech Solutions');
pj2.setEmail('contato@techsolutions.com.br');
pj2.setCNPJ('98765432000110');
pj2.setRazaoSocial('Tech Solutions S.A.');

// data de registro 
const data = new Date();

// criando as três inscrições estaduais
const ie1 = new IEclss();   // usa new porque é uma nova classe
const ie2 = IEfunc();       // função fábrica, SEM new
const ie3 = IEjson;         // objeto literal, que já existe, só configuramos

ie1.setNumero('111.111.111');
ie1.setEstado('DF'); 
ie1.setDataRegistro(data);
ie2.setNumero('222.222.222');
ie2.setEstado('GO');
ie2.setDataRegistro(data);
ie3.setNumero('333.333.333');
ie3.setEstado('MG');
ie3.setDataRegistro(data);

// testando o instanceof 
const objetoInvalido = { 
    nome: 'Empresa Inválida' 
};

console.log('- ˙◠˙ Objeto inválido (esperado: false nos três)  ★ -');
console.log('IEclss:', ie1.setPJ(objetoInvalido));
console.log('IEfunc:', ie2.setPJ(objetoInvalido));
console.log('IEjson:', ie3.setPJ(objetoInvalido));

console.log('- ★ PJ verdadeira (esperado: true nos três)  ★ -');
console.log('IEclss:', ie1.setPJ(pj1));
console.log('IEfunc:', ie2.setPJ(pj2)); // Extra 2: PJ diferente em cada implementação
console.log('IEjson:', ie3.setPJ(pj1));

// desafio avançado: uma função só serve para as três 
// funciona porque as três estruturas têm os mesmos nomes de métodos
function mostrarIE(ie) {
    const pj = ie.getPJ();

    console.log(' ⟡・ Pessoa Jurídica  ⟡・');
    console.log('⤷ Nome:', pj.getNome());
    console.log('⤷ E-mail:', pj.getEmail());
    console.log('⤷ CNPJ:', pj.getCNPJ());
    console.log('⤷ Razão Social:', pj.getRazaoSocial());

    console.log('⟡・ Inscrição Estadual ⟡・');
    console.log('⤷ Número:', ie.getNumero());
    console.log('⤷ Estado:', ie.getEstado());
    console.log('⤷ Data de Registro:', ie.getDataRegistro().toLocaleString('pt-BR'));
    console.log('⤷ Pessoa Jurídica:', pj.getRazaoSocial());
    console.log('------------------------------');
}

// relatório final 
console.log('\n︶ ⏝ ︶ ୨୧ IEclss ୨୧ ︶ ⏝ ︶');
mostrarIE(ie1);
console.log('︶ ⏝ ︶ ୨୧ IEfunc() ୨୧  ︶ ⏝ ︶');
mostrarIE(ie2);
console.log('︶ ⏝ ︶ ୨୧ IEjson ୨୧ ︶ ⏝ ︶');
mostrarIE(ie3);