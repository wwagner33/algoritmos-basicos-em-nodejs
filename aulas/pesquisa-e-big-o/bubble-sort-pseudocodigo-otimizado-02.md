# Pseudocódigo do Bubble Sort com Otimização - 2
O código a seguir foi colhido na página da Wikipedia sobre [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort).

_De forma mais geral, pode acontecer que mais de um elemento seja colocado em sua posição final em uma única passagem. Em particular, após cada passagem, todos os elementos após a última troca são ordenados e não precisam ser verificados novamente. Isso nos permite pular muitos elementos, resultando em uma melhoria de cerca de **50%** na contagem de comparações no pior caso (embora não haja melhoria na contagem de trocas) e adiciona muito pouca complexidade porque o novo código engloba a `swapped` variável._

```javascript
procedure bubbleSort(A : list of sortable items)
    n := length(A)
    repeat
        newn := 0
        for i := 1 to n - 1 inclusive do
            if A[i - 1] > A[i] then
                swap(A[i - 1], A[i])
                newn := i
            end if
        end for
        n := newn
    until n ≤ 1
end procedure
```
