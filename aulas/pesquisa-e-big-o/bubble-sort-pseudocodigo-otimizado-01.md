# Pseudocódigo do Bubble Sort com Otimização 1

O código a seguir foi colhido na página da Wikipedia sobre [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort).

_O algoritmo de ordenação por bolha pode ser otimizado observando que a n-ésima passagem encontra o n-ésimo maior elemento e o coloca em sua posição final. Assim, o laço interno pode evitar examinar os últimos `n − 1 itens ao ser executado pela n-ésima vez._

```javascript
procedure bubbleSort(A : list of sortable items)
    n := length(A)
    repeat
        swapped := false
        for i := 1 to n - 1 inclusive do
            if A[i - 1] > A[i] then
                swap(A[i - 1], A[i])
                swapped := true
            end if
        end for
        n := n - 1
    until not swapped
end procedure
```