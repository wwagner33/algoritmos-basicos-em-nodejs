//Busca Simples ou Linear de String Completa

function buscaSimples(lista, valorAlvo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valorAlvo) {
            return i; // Retorna o índice do elemento encontrado
        }
    }
    return null; // Retorna null se o elemento não for encontrado
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

let alvo = "Wesley";
let indice = buscaSimples(nomesSimples, alvo);

console.log(`Índice do vetor da palavra ${alvo}: ${indice!== null ? indice : "Não encontrado"}`);
