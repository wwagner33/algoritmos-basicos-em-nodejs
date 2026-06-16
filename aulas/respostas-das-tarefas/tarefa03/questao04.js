// 4. Bubble Sort - Implementação Formal

function bubbleSort(arr) {
    let n = arr.length;
    
    // Laço externo garante que o array será percorrido o número necessário de vezes
    for (let i = 0; i < n - 1; i++) {
        
        // Laço interno para varrer elementos adjacentes.
        // "n - 1 - i" otimiza o laço ignorando a parte final que já borbulhou (foi ordenada)
        for (let j = 0; j < n - 1 - i; j++) {
            
            // Se o elemento atual for maior que o sucessor, ocorre a troca (swap)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arrayDesordenado = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", [64, 34, 25, 12, 22, 11, 90]);
console.log("Array ordenado via Bubble Sort:", bubbleSort(arrayDesordenado));