/* 

Função que testa se um determinado número fornecido é primo (Primality Test)

Algoritmo:

1. Checa se o número é menor ou igual a 1, caso seja, retorna false (não é primo);
2. Checa se o número é 2 ou 3, caso seja, retorna true (é primo);
3. Elimina os números pares e os mltiplos de 3, pois eles não são primos (exceto 2 e 3);
4. Calcula a raiz quadrada do número fornecido.
5. Itera os números de 5 até a raiz quadrada do número, verificando se o número é divisível por algum desses números. 
5.1 Se for, retorna false (não é primo);
5.2 Se não for, continua a iteração;
6. Se a iteração terminar sem encontrar nenhum divisor, retorna true (é primo).

*/

function isPrimev1(num,logging=true) {

    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (num <= 3) return true;  // 2 e 3 são primos

    if (num % 2 === 0 || num % 3 === 0) return false; // Elimina múltiplos de 2 e 3

    for (let i = 5; i <= num; i++) {
        if (num % i === 0) {
            return false; // Se for divisível por algum desses números, não é primo
        }
        if (logging) {
            console.log(`Verificando divisibilidade por ${i}...`); // Adiciona um log para mostrar o progresso da verificação
        }
    }

    return true; // Se passar por todas as verificações, é primo
}

function isPrimev2(num) {
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (num <= 3) return true;  // 2 e 3 são primos

    if (num % 2 === 0 || num % 3 === 0) return false; // Elimina múltiplos de 2 e 3

    for (let i = 5; i < (num/2); i++) {
        if (num % i === 0) {
            return false; // Se for divisível por algum desses números, não é primo
        }
    }

    return true; // Se passar por todas as verificações, é primo
}

function isPrimev3(num) {
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (num <= 3) return true;  // 2 e 3 são primos

    if (num % 2 === 0 || num % 3 === 0) return false; // Elimina múltiplos de 2 e 3

    for (let i = 5; i < (num/2); i+=6) {
        if (num % i === 0|| num % 3 === 0) {
            return false; // Se for divisível por algum desses números, não é primo
        }
    }

    return true; // Se passar por todas as verificações, é primo
}

function isPrimev4(num) {
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (num <= 3) return true;  // 2 e 3 são primos

    if (num % 2 === 0 || num % 3 === 0) return false; // Elimina múltiplos de 2 e 3

    for (let i = 5; i*i < num; i+=6) { // Verifica os números da forma 6k ± 1
        if (num % i === 0|| num % 3 === 0) {
            return false; // Se for divisível por algum desses números, não é primo
        }
    }

    return true; // Se passar por todas as verificações, é primo
}

function isPrimev5(num) {
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (num <= 3) return true;  // 2 e 3 são primos

    if (num % 2 === 0 || num % 3 === 0) return false; // Elimina múltiplos de 2 e 3
    let sqlNum = Math.floor(Math.sqrt(num)); // Calcula a raiz quadrada do número fornecido
    for (let i = 5; i < sqlNum; i+=6) { // Verifica os números da forma 6k ± 1
        if (num % i === 0|| num % 3 === 0) {
            return false; // Se for divisível por algum desses números, não é primo
        }
    }

    return true; // Se passar por todas as verificações, é primo
}

//let nums = [2,7,11,24,1,0,421,4751,31081,375643,4915219,68303507,360653149,8374982981];
//let nums = [77740643164984133573]; O valor 77740643164984133573 é um número primo, mas ele é maior do que o limite de precisão do JavaScript, então a função isPrimev5 irá retornar null para indicar que o resultado é impreciso.
let nums = "[77740643164984133573]";
//let nums = [351819000164201];
let timeResults = [];
if (typeof nums !== 'array') {
    console.log(`O valor fornecido para nums é uma string: ${nums}`);
    console.log('Convertendo a string para um array de números...');
    nums = JSON.parse(nums);
}
// Captura o erro (exceção) quando a função é chamada, caso ocorra.
try{
    nums.forEach(num => {
        let startTime = performance.now();
        let result = isPrimev1(num);
        let endTime = performance.now();
        timeResults.push({num, result, time: endTime - startTime});
    });
}catch(err){
    console.log(`Erro capturado quando foi fornecido o valor nums: ${err}`);
}



console.log(timeResults);
/**
 * Resultados: isPrimev1
[
  { num: 2, result: true, time: 0.025337999999997862 },
  { num: 7, result: true, time: 0.00143200000000121 },
  { num: 11, result: true, time: 0.0006810000000001537 },
  { num: 24, result: false, time: 0.0005409999999983484 },
  { num: 1, result: false, time: 0.0011319999999983565 },
  { num: 0, result: false, time: 0.000460000000000349 },
  { num: 421, result: true, time: 0.008196000000001646 },
  { num: 4751, result: true, time: 0.10170199999999952 },
  { num: 31081, result: true, time: 0.5311999999999983 },
  { num: 375643, result: true, time: 1.31222 },
  { num: 4915219, result: true, time: 17.412409 },
  { num: 68303507, result: true, time: 238.89817000000002 },
  { num: 360653149, result: true, time: 1241.339278 },
  { num: 8374982981, result: true, time: 44548.341456999995 }
]

* Resultados: isPrimev2
[
  { num: 2, result: true, time: 0.025717999999997687 },
  { num: 7, result: true, time: 0.0014730000000007237 },
  { num: 11, result: true, time: 0.0011119999999991137 },
  { num: 24, result: false, time: 0.0005610000000011439 },
  { num: 1, result: false, time: 0.001122999999999763 },
  { num: 0, result: false, time: 0.0005010000000034154 },
  { num: 421, result: true, time: 0.01201199999999858 },
  { num: 4751, result: true, time: 0.1669339999999977 },
  { num: 31081, result: true, time: 0.5983660000000022 },
  { num: 375643, result: true, time: 1.0385740000000006 },
  { num: 4915219, result: true, time: 13.825449000000003 },
  { num: 68303507, result: true, time: 192.89722999999998 },
  { num: 360653149, result: true, time: 987.5386629999999 },
  { num: 8374982981, result: true, time: 22499.29049 }
]

* Resultados: isPrimev3
[
  { num: 2, result: true, time: 0.036828999999997336 },
  { num: 7, result: true, time: 0.003256999999997845 },
  { num: 11, result: true, time: 0.001072000000000628 },
  { num: 24, result: false, time: 0.0005810000000003868 },
  { num: 1, result: false, time: 0.001172000000000395 },
  { num: 0, result: false, time: 0.0004810000000006198 },
  { num: 421, result: true, time: 0.005970999999998838 },
  { num: 4751, result: true, time: 0.02446600000000032 },
  { num: 31081, result: true, time: 0.29195999999999955 },
  { num: 375643, result: true, time: 2.6775400000000005 },
  { num: 4915219, result: true, time: 2.3695200000000014 },
  { num: 68303507, result: true, time: 32.825396999999995 },
  { num: 360653149, result: true, time: 167.870182 },
  { num: 8374982981, result: true, time: 3752.5355839999997 }
]

* Resultados: isPrimev4
[
  { num: 2, result: true, time: 0.03840200000000138 },
  { num: 7, result: true, time: 0.0018430000000009272 },
  { num: 11, result: true, time: 0.0007709999999967465 },
  { num: 24, result: false, time: 0.0007420000000024629 },
  { num: 1, result: false, time: 0.0015929999999997335 },
  { num: 0, result: false, time: 0.0006709999999969796 },
  { num: 421, result: true, time: 0.0015020000000021128 },
  { num: 4751, result: true, time: 0.002505000000002866 },
  { num: 31081, result: true, time: 0.00622200000000106 },
  { num: 375643, result: true, time: 0.010449999999998738 },
  { num: 4915219, result: true, time: 0.03200000000000003 },
  { num: 68303507, result: true, time: 0.1652710000000006 },
  { num: 360653149, result: true, time: 0.2979910000000032 },
  { num: 8374982981, result: true, time: 0.6076840000000026 }
]

* Resultados: isPrimev5
[
  { num: 2, result: true, time: 0.034575000000000244 },
  { num: 7, result: true, time: 0.0033469999999979905 },
  { num: 11, result: true, time: 0.0007519999999985316 },
  { num: 24, result: false, time: 0.0005509999999979698 },
  { num: 1, result: false, time: 0.00143200000000121 },
  { num: 0, result: false, time: 0.0004710000000009984 },
  { num: 421, result: true, time: 0.0017329999999979862 },
  { num: 4751, result: true, time: 0.001984000000000208 },
  { num: 31081, result: true, time: 0.010099000000000302 },
  { num: 375643, result: true, time: 0.007123999999997466 },
  { num: 4915219, result: true, time: 0.020258000000001886 },
  { num: 68303507, result: true, time: 0.10982600000000176 },
  { num: 360653149, result: true, time: 0.23249699999999862 },
  { num: 8374982981, result: true, time: 0.8579450000000008 }
]
**/

/* 
function isPrime(num) {
    if (Number.isSafeInteger(num) === false) {
        return null; // Retorna null para indicar que o resultado é impreciso
    }

    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (num <= 3) return true;  // 2 e 3 são primos

    if (num % 2 === 0 || num % 3 === 0) return false; // Elimina múltiplos de 2 e 3

    const sqrtNum = Math.sqrt(num); // Calcula a raiz quadrada do número

    for (let i = 5; i <= sqrtNum; i += 6) { // Verifica os números da forma 6k ± 1
        if (num % i === 0 || num % (i + 2) === 0) {
            return false; // Se for divisível por algum desses números, não é primo
        }
    }

    return true; // Se passar por todas as verificações, é primo
}
*/