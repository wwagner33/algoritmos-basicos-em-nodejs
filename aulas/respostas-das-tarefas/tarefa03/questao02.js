// 2. Soma das Pontas e Complexidade Constante

function somaExtremos(arr) {
    if (arr.length === 0) return 0;
    
    // Acessando diretamente o primeiro e o último índice
    return arr[0] + arr[arr.length - 1];
}

const listaTeste = [10, 20, 30, 40, 50, 60];
console.log("Soma do primeiro e último elemento:", somaExtremos(listaTeste));

/*
 * EXPLICAÇÃO DE COMPLEXIDADE:
 *
 * - Complexidade Temporal O(1): 
 * A operação não depende de percorrer o array. O JavaScript acessa o índice 0 
 * e o índice final calculando o endereço de memória diretamente, o que leva o mesmo 
 * tempo computacional para um array de 10 itens ou de 1 milhão de itens. Por isso, 
 * o tempo de execução é "constante".
 *
 * - Complexidade Espacial O(1):
 * A função não cria nenhuma nova estrutura de dados (como um array auxiliar) que 
 * dependa do tamanho da entrada. Ela apenas usa a referência que já existe em 
 * memória para somar e retornar o valor. Portanto, a alocação de memória é 
 * rigorosamente a mesma e constante independente do tamanho do array original.
 */