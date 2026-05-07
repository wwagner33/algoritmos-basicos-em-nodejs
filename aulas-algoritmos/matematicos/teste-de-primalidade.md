# Teste de Primalidade

O *Teste de Primalidade* é um algoritmo para determinar se um número natural é primo. A evolução desses testes reflete a busca por reduzir a **complexidade computacional**, permitindo processar números cada vez maiores em menos tempo.

A explicação a seguir diz respeito aos códigos presentes no arquivo `isPrime.js`, que acompanha este arquivo e pode ser acessado através deste [*link*](./isPrime.js).

## 1. Métodos Determinísticos: Divisão por Tentativa (*Trial Division*)

Esta categoria baseia-se em tentar dividir o número $n$ por uma série de candidatos a divisores. Se nenhum divisor for encontrado, o número é primo.

### A. O Limite Linear ($n$)
A abordagem inicial testa todos os números de $2$ até $n-1$.
**Complexidade:** $O(n)$.
**Problema:** Inviável para números grandes; testar um número de 10 dígitos exigiria bilhões de operações.

### B. Otimização pela Metade ($\frac{n}{2}$)
Baseia-se no princípio de que um divisor próprio de $n$ nunca pode ser maior que $\frac{n}{2}$. 
> **Fundamentação Matemática:** Se $d$ é um divisor de $n$, então $n/d$ também é um divisor. Se $d > \frac{n}{2}$, então $\frac{n}{d} < 2$. Como o menor divisor possível (além de 1) é 2, é impossível encontrar um divisor inteiro no intervalo $(\frac{n}{2}, n)$.

### C. Fatoração por Rodas (*Wheel Factorization*)
Observa-se que todos os números primos (exceto 2 e 3) seguem a forma $6k \pm 1$.
**Lógica:** Ao pular de 6 em 6 ($i += 6$) e testar apenas $i$ e $i+2$, eliminamos o teste de todos os múltiplos de 2 e 3.
**Ganho:** Reduz as iterações em aproximadamente **83%** em comparação ao teste de todos os números.

### D. O Limite da Raiz Quadrada ($\sqrt{n}$)
Esta é a otimização definitiva para o método de divisão. Se um número $n$ é composto, ele deve ter pelo menos um divisor menor ou igual a $\sqrt{n}$.
**Complexidade:** Reduz de $O(n)$ para $O(\sqrt{n})$.
**Exemplo:** Para o número $1.000.000$, o limite cai de $500.000$ (metade) para apenas $1.000$ (raiz).


## 2. Otimização de *Microbenchmark*

Além da lógica matemática, a forma como o código é escrito influencia a velocidade:

**Cálculo Único:** Em loops de alta performance, deve-se calcular a raiz quadrada (`Math.sqrt(n)`) uma única vez antes do início do loop, em vez de recalculá-la a cada iteração (ex: `i * i < n`). Isso poupa ciclos de processamento redundantes na CPU.


## 3. Quadro Comparativo de Performance

| Versão | Nome Técnico | Limite de Busca | Complexidade | Eficiência Prática |
| :--- | :--- | :--- | :--- | :--- |
| **v1** | Trial Division | $n - 1$ | $O(n)$ | Muito Lenta |
| **v2** | Divisibilidade Simples | $n / 2$ | $O(n)$ | Lenta |
| **v3** | Wheel Factorization | $n / 2$ (saltos) | $O(n)$ | Moderada |
| **v4/v5** | Raiz Quadrada | $\sqrt{n}$ | $O(\sqrt{n})$ | Rápida (Determinística) |

## 4. Quadro Comparativo de Tempo das funções
![Gráfico comparativo das 5 versões da função `isPrime()`](./comparaca-funcoes-isPrime.png "Gráfico comparativo das 5 versões da função `isPrime()`")