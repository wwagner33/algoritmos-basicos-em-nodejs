// 1. Pesquisa Linear e Pior Cenário

function pesquisaLinear(arr, alvo) {
    let operacoes = 0;
    for (let i = 0; i < arr.length; i++) {
        operacoes++;
        if (arr[i] === alvo) {
            return { encontrado: true, indice: i, operacoes };
        }
    }
    return { encontrado: false, indice: -1, operacoes };
}

const lista = [42, 15, 8, 99, 23, 4, 16];
const alvo = 100; // Elemento que não existe no array

const resultado = pesquisaLinear(lista, alvo);
console.log(`Buscando o alvo ${alvo}... Resultado:`, resultado);

console.log(`
--- ANÁLISE ---
Por que esse é o "pior cenário" em termos de processamento?
R: Na pesquisa linear, o pior cenário (Worst-Case) ocorre quando o elemento procurado 
não está presente no array (ou é o exato último elemento). Nesses casos, a função 
é forçada a percorrer a lista inteira, realizando verificações em cada posição. 
Isso resulta em uma complexidade de tempo O(N). No exemplo acima, como a lista tem 
${lista.length} elementos, o laço de repetição foi obrigado a executar exatas ${resultado.operacoes} operações.
`);