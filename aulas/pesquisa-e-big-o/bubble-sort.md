# Ordenação por Método da Bolha (Bubble Sort)

O **Bubble Sort** é um dos algoritmos de ordenação mais simples e intuitivos. Ele recebe esse nome porque a sua mecânica lembra bolhas de ar subindo para a superfície da água: a cada passagem pela lista, os maiores elementos "flutuam" para as últimas posições.

O algoritmo funciona comparando elementos adjacentes (vizinhos) dois a dois. Se o elemento da esquerda for maior que o da direita, eles trocam de posição. 

Esse processo se repete até que nenhuma troca seja necessária, garantindo que o vetor está ordenado.

### Exemplo passo a passo com 5 elementos

Imagine que temos o seguinte vetor desordenado:

`Vetor Inicial: [5, 3, 8, 4, 2]`

**Primeira Rodada (Flutuando o maior número):**

* Comparamos **5** e **3**. Como 5 > 3, trocamos: `[3, 5, 8, 4, 2]`
* Comparamos **5** e **8**. Como 5 < 8, não trocamos: `[3, 5, 8, 4, 2]`
* Comparamos **8** e **4**. Como 8 > 4, trocamos: `[3, 5, 4, 8, 2]`
* Comparamos **8** e **2**. Como 8 > 2, trocamos: `[3, 5, 4, 2, 8]`

> *Fim da primeira rodada. O maior número (8) já "flutuou" para a sua posição final à direita.*

**Segunda Rodada (Ignorando o último elemento):**

* Comparamos **3** e **5**. Não trocamos: `[3, 5, 4, 2, 8]`
* Comparamos **5** e **4**. Trocamos: `[3, 4, 5, 2, 8]`
* Comparamos **5** e **2**. Trocamos: `[3, 4, 2, 5, 8]`

> *Fim da segunda rodada. O segundo maior número (5) agora está na posição correta.*

O algoritmo continua esse processo até que, em uma rodada completa, nenhuma troca seja feita.

## Pseudocódigo para o Bubble Sort sem otimização
O pseudo-código a seguir foi colhido na página da Wikipedia sobre [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort).

```javascript
procedure bubbleSort(A : list of sortable items)
    n := length(A)
    repeat
        swapped := false
        for i := 1 to n-1 inclusive do
            { if this pair is out of order }
            if A[i-1] > A[i] then
                { swap them and remember something changed }
                swap(A[i-1], A[i])
                swapped := true
            end if
        end for
    until not swapped
end procedure
```

## Pseudo-códigos Otimizados

* **Pseudo-código Otimizado 01:** [arquivo](bubble-sort-pseudocodigo-otimizado-01.pdf)
* **Pseudo-código Otimizado 02:** [arquivo](bubble-sort-pseudocodigo-otimizado-02.pdf)

