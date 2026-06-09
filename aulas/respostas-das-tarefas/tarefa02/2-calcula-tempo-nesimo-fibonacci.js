// Solução usando recursão sem cache/memŕia (ineficiente)
//F(n) = F(n-1) + F(n-2)

function nEsimoFibonacciV1(n) {
    if(n<=1) {
        return n;
    }
    
    return nEsimoFibonacciV1(n-1) + nEsimoFibonacciV1(n-2);
}

//Usando Binet, a fórmula é: F(n) = (phi^n - psi^n) / sqrt(5), onde phi = (1 + sqrt(5)) / 2 e psi = (1 - sqrt(5)) / 2.
function nEsimoFibonacciV2(n) {
    let phi = (1 + Math.sqrt(5)) / 2;
    let psi =(1 - Math.sqrt(5)) / 2;
    let fibonacci = (Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5);
    
    return Math.round(fibonacci);
}

// Usando Memoir, onde armazenamos os resultados já calculados para evitar cálculos repetidos.
/* 
Dicionário, em Ciencia da Computação, é uma estrutura de dados que armazena pares de chave-valor (Exemplo: pessoa = {nome: "João", idade: 30}). No exemplo de pessoa, se quero acessar o nome da "pessoa", eu posso usar a chave "nome" para obter o valor "João". Em Javascript seria: "pessoa.nome" ou "pessoa['nome']". O Dicionário, em Javascript, recebe o nome de "Objeto Literal", onde as chaves são strings e os valores podem ser de qualquer tipo. No exemplo de pessoa, o objeto literal seria:
let pessoa = {
    nome: "João",
    idade: 30
};

Vou usar um "objeto literal" para armazenar os resultados já calculados da função de Fibonacci, onde a chave será o valor de "n" e o valor será o resultado da função para esse "n". Assim, quando a função for chamada novamente com o mesmo "n", ela pode verificar se o resultado já está armazenado no objeto literal (cache) e retornar o valor armazenado, evitando cálculos repetidos e melhorando a eficiência da função.

*/

function nEsimoFibonacciV3(n, cache = {}) {
    //Usando a Memória para não ter retrabalho, ou seja, não calcular o mesmo valor mais de uma vez.
    if(n in cache) {
        return cache[n];
    }
    if(n<=1) {
        return n;
    }
    cache[n] = nEsimoFibonacciV3(n-1, cache) + nEsimoFibonacciV3(n-2, cache);

    // console.log(`Calculando Fibonacci de ${n}... Cache atual:`, cache);
    return cache[n];

}


let nEsimo =30;



console.time('Tempo de execução da Função de Fibonacci V1');
let resultadoV1 = nEsimoFibonacciV1(nEsimo);
console.timeEnd('Tempo de execução da Função de Fibonacci V1');

console.time('Tempo de execução da Função de Fibonacci V2');
let resultadoV2 = nEsimoFibonacciV2(nEsimo);
console.timeEnd('Tempo de execução da Função de Fibonacci V2');

console.time('Tempo de execução da Função de Fibonacci V3');
let resultadoV3 = nEsimoFibonacciV3(nEsimo);
console.timeEnd('Tempo de execução da Função de Fibonacci V3');

console.log(`O ${nEsimo}º número de Fibonacci é: ${resultadoV1} (V1), ${resultadoV2} (V2), ${resultadoV3} (V3)`);