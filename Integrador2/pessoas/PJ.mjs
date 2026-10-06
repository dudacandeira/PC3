import Pessoa from './Pessoa.js';

// PJ herda de Pessoa: já ganha setNome/getNome/setEmail/getEmail
class PJ extends Pessoa {
    #cnpj;
    #razaoSocial;

    // desafio extra 1: o CNPJ deve ter exatamente 14 caracteres
    setCNPJ(cnpj) {
        if (typeof cnpj === 'string' && cnpj.length === 14) {
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setRazaoSocial(razaoSocial) {
        if (typeof razaoSocial === 'string' && razaoSocial.trim() !== '') {
            this.#razaoSocial = razaoSocial;
            return true;
        }
        return false;
    }

    getRazaoSocial() {
        return this.#razaoSocial;
    }
}

export default PJ;