// 8. Fibonacci com Memoization vs Recursivo Normal

// -- Função da Questão 7 para servir de contraste --
function fibonacciNormal(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciNormal(n - 1) + fibonacciNormal(n - 2);
}

// -- Nova Função com Memoization --
function fibonacciMemo(n, cache = {}) {
    if (n in cache) return cache[n]; // Se o valor já foi calculado, resgate imediatamente
    
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Salva no cache antes de retornar
    cache[n] = fibonacciMemo(n - 1, cache) + fibonacciMemo(n - 2, cache);
    return cache[n];
}

const N_ALVO = 40; // Posição que desejamos calcular

// 1. Mensuração do modo Normal
const tempoInicioNormal = performance.now();
const resNormal = fibonacciNormal(N_ALVO);
const tempoFimNormal = performance.now();
const deltaNormal = tempoFimNormal - tempoInicioNormal;

// 2. Mensuração do modo Otimizado
const tempoInicioMemo = performance.now();
const resMemo = fibonacciMemo(N_ALVO);
const tempoFimMemo = performance.now();
const deltaMemo = tempoFimMemo - tempoInicioMemo;

console.log(`=== CALCULANDO A POSIÇÃO ${N_ALVO} DE FIBONACCI ===`);
console.log(`- Recursivo Normal: Resultado ${resNormal} | Tempo de C.P.U: ${deltaNormal.toFixed(3)} ms`);
console.log(`- Com Memoization:  Resultado ${resMemo} | Tempo de C.P.U: ${deltaMemo.toFixed(3)} ms`);
console.log(`\nCOMPARAÇÃO: O algoritmo otimizado (Memoization) foi cerca de ${(deltaNormal - deltaMemo).toFixed(3)} milissegundos mais rápido!`);