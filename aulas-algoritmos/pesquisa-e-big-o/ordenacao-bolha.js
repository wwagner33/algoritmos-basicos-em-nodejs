/**
 * Algoritmo de ordenação: Bubble Sort
 * 
 * O Bubble Sort é um algoritmo de ordenação simples que funciona repetidamente
 * percorrendo a lista, comparando elementos adjacentes e os trocando de posição
 * se estiverem na ordem errada. O processo é repetido até que a lista esteja
 * ordenada.
 * 
 * Complexidade de tempo: O(n^2) no pior caso, O(n) no melhor caso (quando a lista já está ordenada).
 * Complexidade de espaço: O(1) (algoritmo in-place).
 */

const lista = require("./dados").lista1M; // Você pode usar lista100 ou lista1000 para testar o algoritmo.
//const lista = [64, 34, 25, 12, 22, 11, 90];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Troca arr[j] e arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//console.log(`Array original: ${lista.join(", ")}.\n`);
console.log(`Array ordenado: ${bubbleSort(lista).join(", ")}.\n`);