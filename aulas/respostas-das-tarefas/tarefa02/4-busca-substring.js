//Busca  Linear de Substring

function buscaSimples(lista, valorAlvo) {
    let resultados = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].startsWith(valorAlvo)) { // Verifica se o elemento começa com a substring alvo
            resultados.push(lista[i]); // Adiciona o elemento encontrado à lista de resultados
        }
    }
    return resultados.length > 0 ? resultados : null; // Retorna a lista de elementos encontrados ou null se nenhum for encontrado

} //Complexidade da Função (pior caso): O(n) que é linear, pois no pior caso, a função precisa percorrer toda a lista para encontrar o elemento ou determinar que ele não está presente.

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

let alvo = "W";
let resultados = buscaSimples(nomesSimples, alvo);

console.log(`Resultados para a substring "${alvo}": ${resultados !== null ? resultados.join(", ") : "Não encontrado"}`);