// 7. Série de Fibonacci com Recursividade Pura

let contadorDeChamadas = 0;

function fibonacciRecursivo(n) {
    contadorDeChamadas++;
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

// Executando para F(10)
contadorDeChamadas = 0;
const f10 = fibonacciRecursivo(10);
console.log(`F(10) resulta em ${f10} | Chamadas recursivas exigidas: ${contadorDeChamadas}`);

// Executando para F(15)
contadorDeChamadas = 0;
const f15 = fibonacciRecursivo(15);
console.log(`F(15) resulta em ${f15} | Chamadas recursivas exigidas: ${contadorDeChamadas}`);

/*
 * DOCUMENTAÇÃO DE COMPLEXIDADE:
 * A taxa de crescimento das chamadas impressas revela a ineficiência assustadora 
 * deste algoritmo. De 177 chamadas no F(10), ele salta para quase 2.000 no F(15).
 * Isso caracteriza uma Complexidade de Tempo Exponencial ( O(2^n) ).
 * O algoritmo acaba formando uma "árvore de execução", gastando enormes recursos para
 * recalcular cegamente os exatos mesmos subproblemas repetidas vezes.
 */