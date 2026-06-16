// 3. O Filtro de Elementos (Iteração Clássica)

function filtrarPares(numeros) {
    let pares = []; // Novo array para armazenar o resultado

    // Laço for clássico
    for (let i = 0; i < numeros.length; i++) {
        // O operador módulo (%) retorna o resto da divisão. Se for 0 por 2, é par.
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]); // Adiciona o número ao novo array
        }
    }

    return pares;
}

const entrada = [3, 8, 15, 22, 42, 7];
console.log("Entrada:", entrada);
console.log("Apenas Pares:", filtrarPares(entrada));

/*
 * EXPLICAÇÃO TEÓRICA:
 * A criação de um array auxiliar (pares = []) demonstra o conceito de "imutabilidade" 
 * ou "função pura", onde preferimos criar e retornar um novo conjunto de dados 
 * filtrado em vez de alterar/deletar itens do array original recebido no parâmetro, 
 * prevenindo efeitos colaterais (side effects) no restante da aplicação.
 */