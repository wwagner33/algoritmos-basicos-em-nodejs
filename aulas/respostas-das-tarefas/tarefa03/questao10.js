// 10. Fórmula de Binet e os Limites do Computador

// 1. Função Segura (Memoization) gerando o espelho exato da matemática no JS
function fibonacciMemo(n, cache = {}) {
    if (n in cache) return cache[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    cache[n] = fibonacciMemo(n - 1, cache) + fibonacciMemo(n - 2, cache);
    return cache[n];
}

// 2. Cálculo via Fórmula Direta de Binet
function fibonacciBinet(n) {
    const raizDe5 = Math.sqrt(5);
    const proporcaoAurea = (1 + raizDe5) / 2;
    const psi = (1 - raizDe5) / 2;
    
    // A fórmula exata aplica as potências sobre a Proporção Áurea
    return Math.round((Math.pow(proporcaoAurea, n) - Math.pow(psi, n)) / raizDe5);
}

let nFalha = null;

console.log("Teste de Divergência | Padrão IEEE 754");
console.log("n\tAlgoritmo Memoization\t\tFórmula de Binet");
console.log("-".repeat(70));

for (let n = 1; n <= 100; n++) {
    let valorSeguro = fibonacciMemo(n);
    let valorBinet = fibonacciBinet(n);

    // O laço para assim que os resultados deixam de bater
    if (valorSeguro !== valorBinet) {
        console.log(`${n}\t${valorSeguro}\t< DIVERGÊNCIA >\t${valorBinet}`);
        nFalha = n;
        break; // break instruction exigida
    }
}

console.log(`
==== CONCLUSÃO ====
A divergência estrutural entre as duas lógicas ocorreu na posição de n = ${nFalha}.

Como isso comprova o limite da arquitetura do computador?
R: A máquina lida com memória finita. O JavaScript, utilizando o formato padrão de 
precisão dupla (Float 64-bits do IEEE 754), reserva espaços rigorosamente delimitados 
para a construção dos números. A Fórmula de Binet depende de números fortemente 
irracionais, como a Raiz Quadrada de 5 e a Proporção Áurea. 

À medida que o "n" escala, realizar potências altas com pontos flutuantes imperfeitos 
acumula ínfimos resíduos e perdas de arrendondamento. Ao atingir o tamanho 
demonstrado no teste, esse lixo de arredondamento escala ao ponto de a fórmula 
entregar o número inteiro errado, provando que a matemática pura perde a batalha 
contra os limites limitados e aproximações do processador do computador.
`);