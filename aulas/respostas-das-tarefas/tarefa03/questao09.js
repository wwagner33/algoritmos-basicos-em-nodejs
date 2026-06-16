// 9. Otimização do Limite da Raiz Quadrada em Números Primos

// -- Função da Questão 3 para comparação --
function isPrimeQ3(n) {
    let iteracoes = 0;
    for (let i = 2; i < n; i++) {
        iteracoes++;
        if (n % i === 0) return { ePrimo: false, iteracoes };
    }
    return { ePrimo: true, iteracoes };
}

// -- Nova Função Otimizada --
function isPrimeOptimized(n) {
    if (n <= 1) return { ePrimo: false, iteracoes: 0 };
    
    let iteracoes = 0;
    // O cálculo da raiz quadrada ocorre uma única vez, sendo armazenado em variável
    const limite = Math.floor(Math.sqrt(n));

    for (let i = 2; i <= limite; i++) {
        iteracoes++;
        if (n % i === 0) return { ePrimo: false, iteracoes };
    }
    return { ePrimo: true, iteracoes };
}

const testeNumero = 1000003; // Um primo na casa do 1 milhão

const resultadoQ3 = isPrimeQ3(testeNumero);
const resultadoOptimized = isPrimeOptimized(testeNumero);

console.log(`Analisando o número: ${testeNumero}`);
console.log(`- Método da Questão 3: ${resultadoQ3.iteracoes} iterações gastas no laço.`);
console.log(`- Método com Raiz Quadrada: ${resultadoOptimized.iteracoes} iterações gastas no laço.`);
console.log(`\nGANHO: Ao aplicar o Limite da Raiz Quadrada, sua máquina poupou exatamente ${resultadoQ3.iteracoes - resultadoOptimized.iteracoes} loops inúteis!`);