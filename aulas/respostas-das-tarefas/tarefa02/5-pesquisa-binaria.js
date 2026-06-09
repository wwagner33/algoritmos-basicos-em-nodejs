//Pesquisa Binária por String

function pesquisaBinaria(lista, valorAlvo) {
    let inicio = 0;
    let fim = lista.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (lista[meio] === valorAlvo) {
            return meio; // Retorna o índice do valor encontrado
        } else if (lista[meio] < valorAlvo) {
            inicio = meio + 1; // Continua a busca na metade direita
        } else {
            fim = meio - 1; // Continua a busca na metade esquerda
        }
    }

    return null; // Retorna null se o valor não for encontrado
} //Complexidade da pesquisa binária: O(log n) -> Logarítmo na base 2 de n

const nomesSimples = [
    "Ana", "Bruno", "Carlos", "Daniela", "Eduardo",
    "Fernanda", "Gabriel", "Helena", "Igor", "Julia",
    "Kevin", "Larissa", "Marcos", "Natalia", "Otavio",
    "Paula", "Quintino", "Rafaela", "Samuel", "Tatiana",
    "Ulysses", "Vitoria", "Wagner", "Ximena", "Yago",
    "Zelia", "Aline", "Bernardo", "Camila", "Diego",
    "Erica", "Fabio", "Giovana", "Henrique", "Isabela",
    "Joao", "Karina", "Leonardo", "Mariana", "Nicolas",
    "Olivia", "Pedro", "Quiteria", "Ricardo", "Sofia",
    "Thiago", "Ursula", "Vinicius", "Wesley", "Xavier",
    "Yasmin", "Zeca", "Amanda", "Breno", "Carolina",
    "Denis", "Elisa", "Fernando", "Gustavo", "Heitor",
    "Isadora", "Jose", "Katia", "Lucas", "Melissa",
    "Neymar", "Osvaldo", "Priscila", "Quincas", "Renata",
    "Sergio", "Talita", "Uriel", "Valdir", "Wellington",
    "Xenia", "Yuri", "Zilda", "Alice", "Caio",
    "Cintia", "Douglas", "Elias", "Flavia", "Guilherme",
    "Hugo", "Ingrid", "Julio", "Kauã", "Leticia",
    "Mateus", "Noemi", "Orlando", "Patricia", "Queiroz",
    "Rodrigo", "Silvia", "Tomas", "Uira", "Vanessa"
];

//É obrigatório que o vetor esteja ordenado para a pesquisa binária funcionar corretamente
nomesSimples.sort(); //faz uma ordenação alfabética dos nomes

let alvo = "Ana";
console.time("Pesquisa Binária");
let indice = pesquisaBinaria(nomesSimples, alvo);
console.timeEnd("Pesquisa Binária");

console.log(`Índice do vetor da palavra ${alvo}: ${indice !== null ? indice : "Não encontrado"}`);
