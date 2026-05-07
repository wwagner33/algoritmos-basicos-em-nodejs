# Exercícios para Sala de Aula

## Exercício 1: O Detetive de Divisores

**Contexto:** Muitos iniciantes criam laços que sobrecarregam o computador sem necessidade. Vamos mostrar como a matemática pode poupar o processador.

**O Desafio:**
Escreva uma função chamada `contarDivisores(n)` que recebe um número inteiro positivo e retorna quantos divisores ele tem.
1.  **Versão A (Básica):** Use um laço `for` que percorre de $1$ até $n$.
2.  **Versão B (Otimizada):** Use o que aprendemos sobre a "raiz quadrada". Se você encontrar um divisor $d$ que seja menor que $\sqrt{n}$, você automaticamente descobriu outro divisor ($n/d$).
3.  **Bônus:** Use `console.time()` e `console.timeEnd()` para comparar o tempo de execução das duas versões com o número $999.999 .999$.

> **Dica para o aluno:** Lembre-se de tratar o caso onde o número é um "quadrado perfeito" (como $5 \times 5 = 25$), para não contar o mesmo divisor duas vezes!

## Exercício 2: Inversão de *Array*

**Contexto:** A troca de valores (*swap*) usando uma variável temporária é uma das manobras mais fundamentais na programação.

**O Desafio:**
Crie uma função chamada `inverterArray(lista)` que inverta a ordem dos elementos de um array **sem usar o método nativo `.reverse()`**.
1.  Você deve percorrer apenas **metade** do array.
2.  Em cada passo, troque o elemento da posição `i` pelo elemento da posição correspondente no final do array.
3.  **Regra de Ouro:** Declare a variável `temp` obrigatoriamente dentro do bloco do laço `for`, utilizando `let`, para praticar o conceito de escopo de bloco que vimos no *Bubble Sort*.

**Exemplo de entrada:** `[10, 20, 30, 40]`
**Saída esperada:** `[40, 30, 20, 10]`