// 10. Encurtando o Código com Arrow Functions

// Refatoração em única linha. A seta (=>) substitui a palavra "function".
// Quando não há chaves {}, o JavaScript entende o "return" implicitamente.
const converterParaFahrenheit = celsius => (celsius * 1.8) + 32;

console.log("30°C em Fahrenheit é:", converterParaFahrenheit(30));

/*
 * EXPLICAÇÃO TEÓRICA:
 * Além da sintaxe enxuta, Arrow Functions possuem comportamentos distintos no Motor JS, 
 * principalmente na forma como lidam com o objeto 'this'. O retorno implícito (sem a 
 * palavra "return") ocorre quando a lógica cabe perfeitamente numa única instrução de 
 * valor, tornando o código limpo, muito requisitado em operações modernas com Arrays.
 */