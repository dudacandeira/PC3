import Cliente from "./Cliente.js";
import Animal from "./Animal.js";
import Prontuario from "./Prontuario.js";
import Veterinario from "./Veterinario.js";

// CRIACAO DAS VARIAVEIS
let cliente = new Cliente("Duda Candeira", "61999999999");

let noah = new Animal("Noah", "Cachorro");
let luna = new Animal("Luna", "Gato");

let prontuarioNoah = new Prontuario(
    "P001",
    "Vacinação e consulta de rotina"
);

let prontuarioLuna = new Prontuario(
    "P002",
    "Tratamento veterinário"
);

let veterinario1 = new Veterinario(
    "Dra. Jana",
    "CRMV-1234"
);

let veterinario2 = new Veterinario(
    "Dr. Lucas",
    "CRMV-5678"
);


cliente.addAnimal(noah);
cliente.addAnimal(luna);

noah.setProntuario(prontuarioNoah);
luna.setProntuario(prontuarioLuna);

noah.addVeterinario(veterinario1);
noah.addVeterinario(veterinario2);

luna.addVeterinario(veterinario1);

//VISUALIZACAO
console.log(". ݁₊ ⊹ . ݁ CLIENTE  . ⊹ ₊ ݁.");

console.log("𖹭 Nome:", cliente.getNome());
console.log("𖹭 Telefone:", cliente.getTelefone());

console.log("\n. ݁₊ ⊹ . ݁ ANIMAIS  . ⊹ ₊ ݁.");

for (let animal of cliente.getAnimais()) {

    console.log("\n𖹭 Nome do pet:", animal.getNome());
    console.log("𖹭 Espécie:", animal.getEspecie());

    console.log(
        "✭ Dono:",
        animal.getCliente().getNome()
    );

    console.log(
        "✭ Prontuário:",
        animal.getProntuario().getNumero()
    );

    console.log(
        "✭ Observações:",
        animal.getProntuario().getObservacoes()
    );

    console.log("✭ Veterinários:");
    for (let veterinario of animal.getVeterinarios()) {

        console.log(
            "✿⁠", veterinario.getNome(),
            "| CRMV:", veterinario.getCRMV()
        );
    }
}


// DESAFIOS

console.log("\n. ݁₊ ⊹ . ݁ LISTA DE ANIMAIS  . ⊹ ₊ ݁.");

cliente.listarAnimais();

console.log("\n. ݁₊ ⊹ . ݁ VETERINARIOS DO NOAH  . ⊹ ₊ ݁.");
noah.listarVeterinarios();

console.log("\n. ݁₊ ⊹ . ݁ VETERINARIOS DA LUNA  . ⊹ ₊ ݁.");
luna.listarVeterinarios();


// TESTANDO REFERÊNCIAS CRUZADAS
console.log("\n. ݁₊ ⊹ . ݁ REFERENCIAS CRUZADAS  . ⊹ ₊ ݁.");

console.log(
    "Cliente do Noah:",
    noah.getCliente().getNome()
);

console.log(
    "Animal do prontuário:",
    prontuarioNoah.getAnimal().getNome()
);

console.log(
    "Primeiro animal da Dra. Jana:",
    veterinario1.getAnimais()[0].getNome()
    // posicao 0 do array
);

//como executar: node ./Ex7/usaClinica.js