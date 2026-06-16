// 6. Bubble Sort Otimizado

function bubbleSortOtimizado(arr) {
    let n = arr.length;
    let lacosPoupados = 0;
    let passagensTotais = 0;

    for (let i = 0; i < n - 1; i++) {
        let trocado = false; // Flag booleana de controle
        passagensTotais++;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                trocado = true; // Registra que houve swap nesta iteração
            }
        }

        // Se a passagem interna inteira ocorreu sem nenhuma troca,
        // o array já está 100% ordenado. Interrompemos o loop (break early).
        if (!trocado) {
            // Calcula quantos loops do 'for' externo seriam feitos se não houvesse o 'break'
            lacosPoupados = (n - 1) - passagensTotais;
            break; 
        }
    }
    return { array: arr, lacosPoupados };
}

// Testando com um array de 10 elementos que já está ordenado!
const listaJaOrdenada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = bubbleSortOtimizado(listaJaOrdenada);

console.log("Array após passar na função:", resultado.array);
console.log(`Quantidade de laços externos poupados com o "break": ${resultado.lacosPoupados}`);