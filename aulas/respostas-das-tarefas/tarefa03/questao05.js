// 5. Busca Binária com Geração Dinâmica e Cálculo Seguro do Meio

// Geração dinâmica de um array ordenado de 100 números múltiplos de 2 (0, 2, 4... 198)
const arrayOrdenado = Array.from({ length: 100 }, (_, i) => i * 2);

function buscaBinaria(arr, alvo) {
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim) {
        // Cálculo com subtração prévia, conforme material
        let meio = inicio + Math.floor((fim - inicio) / 2);

        if (arr[meio] === alvo) {
            return meio; // Alvo encontrado
        } else if (arr[meio] < alvo) {
            inicio = meio + 1; // Descarta a metade esquerda
        } else {
            fim = meio - 1; // Descarta a metade direita
        }
    }
    return -1; // Alvo não encontrado
}

const alvoBusca = 84;
const indice = buscaBinaria(arrayOrdenado, alvoBusca);
console.log(`Índice onde está o número ${alvoBusca}:`, indice);

console.log(`
--- PREVENÇÃO DE ERROS DE HARDWARE E MATEMÁTICA ---
O uso de "inicio + Math.floor((fim - inicio) / 2)" em vez de "(inicio + fim) / 2" 
ajuda a evitar um problema de hardware conhecido como Integer Overflow (Estouro de Inteiro).
Em arrays gigantescos, cujos índices chegam perto do limite de armazenamento de uma variável 
inteira, somar 'inicio + fim' no meio da busca fará o número extrapolar o espaço 
máximo na memória, gerando números negativos absurdos ou travamentos (na maioria 
das linguagens tipadas). A subtração 'fim - inicio' contorna isso, garantindo que o 
resultado intermediário jamais exceda os limites da memória da máquina.
`);