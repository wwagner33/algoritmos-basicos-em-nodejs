// 1. O Detetive de Divisores (Força Bruta vs Otimização Matemática)

// Versão 1: Força Bruta (Percorre de 1 até n)
function contarDivisoresBruto(n) {
    let contDivisores = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            contDivisores++;
        }
    }
    return contDivisores;
}

// Versão 2: Otimizada (Trial Division baseada na raiz quadrada)
function contarDivisoresOtimizado(n) {
    let contDivisores = 0;
    let limite = Math.floor(Math.sqrt(n)); // Calcula a raiz uma única vez

    for (let i = 1; i <= limite; i++) {
        // Se encontrou um divisor...
        if (n % i === 0) {
            let j = n / i; // Descobre o parceiro do divisor

            if (i !== j) {
                // Se os divisores são diferentes (ex: 2 e 18 para n=36), soma 2
                contDivisores += 2;
            } else {
                // Se são iguais (ex: 6 e 6 para n=36), é um quadrado perfeito, soma 1
                contDivisores += 1;
            }
        }
    }
    return contDivisores;
}

// 3. Teste de Performance com console.time()
const numeroTeste = 999999999;

console.log(`Analisando os divisores de ${numeroTeste}...\n`);

console.time("Tempo Versão Bruta");
const resBruto = contarDivisoresBruto(numeroTeste);
console.timeEnd("Tempo Versão Bruta");

console.time("Tempo Versão Otimizada");
const resOtimizado = contarDivisoresOtimizado(numeroTeste);
console.timeEnd("Tempo Versão Otimizada");

console.log(`\nResultados encontrados: ${resBruto} divisores (Ambas devem dar o mesmo resultado)`);

/*
 * EXPLICAÇÃO TEÓRICA:
 * A diferença de tempo ocorre por conta da complexidade algorítmica. 
 * A "Versão Bruta" possui complexidade linear O(n). Isso significa que, para o número 
 * 999.999.999, o processador executa o laço quase 1 bilhão de vezes.
 * * A "Versão Otimizada" baseia-se na propriedade matemática de que todo divisor maior 
 * que a raiz quadrada de n obrigatoriamente é par (múltiplo) de um divisor menor que 
 * a raiz. Logo, reduzimos o limite de busca para a raiz quadrada do número alvo. 
 * Para 999.999.999, a raiz é aproximadamente 31.622.
 * O laço cai de 1 bilhão de repetições para apenas 31 mil, realizando o mesmo trabalho 
 * em uma fração de milissegundos.
 */