import PJ from '../pessoas/PJ.mjs';

class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    setNumero(numero) {
        this.#numero = numero; 
            return true; 
    }
    
    getNumero() {
        return this.#numero; 
    }

    setEstado(estado) {
         this.#estado = estado; 
         return true; 
    }

    getEstado() {
         return this.#estado;
    }

    // o instanceof Date funciona porque Date é uma classe nativa
    setDataRegistro(data) {
        if (data instanceof Date) {
            this.#dataRegistro = data;
            return true;
        }
        return false;
    }

    getDataRegistro() {
         return this.#dataRegistro; 
    }

    // só associa se for um objeto criado a partir da classe PJ
    setPJ(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }
        return false;
    }

    getPJ() {
         return this.#pj;
    }
}

function IEfunc() {
    // variáveis locais: ninguém de fora acessa diretamente
    let numero;
    let estado;
    let dataRegistro;
    let pj;

    // o objeto retornado só expõe métodos, que "lembram" das variáveis acima
    return {
        setNumero(n) {
            numero = n; 
                return true; 
        },

        getNumero() {
            return numero;
        },

        setEstado(e) {
            estado = e; 
             return true; 
        },

        getEstado() {
            return estado; 
        },

        setDataRegistro(d) {
            if (d instanceof Date) {
                dataRegistro = d;
                return true;
            }
            return false;
        },

        getDataRegistro() {
            return dataRegistro; 
        },

        setPJ(p) {
            if (p instanceof PJ) {
                pj = p;
                return true;
            }
            return false;
        },

        getPJ() {
            return pj; 
        }
    };
}

// aqui é um objeto JavaScript escrito direto no código (NÃO é um documento JSON)
// aqui as propriedades ficam acessíveis (sem proteção), usadas via this
const IEjson = {
    numero: undefined,
    estado: undefined,
    dataRegistro: undefined,
    pj: undefined,

    setNumero(n) {
        this.numero = n; 
            return true; 
    },

    getNumero() {
        return this.numero; 
    },

    setEstado(e) {
        this.estado = e; 
            return true; 
    },

    getEstado() {
        return this.estado; 
    },

    setDataRegistro(d) {
        if (d instanceof Date) {
            this.dataRegistro = d;
            return true;
        }
        return false;
    },

    getDataRegistro() {
        return this.dataRegistro;
    },

    setPJ(p) {
        if (p instanceof PJ) {
            this.pj = p;
            return true;
        }
        return false;
    },

    getPJ() {
        return this.pj; 
    }
};

export default IEclss;
export { IEfunc, IEjson };