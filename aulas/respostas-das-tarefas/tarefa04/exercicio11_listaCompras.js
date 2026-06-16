// 11. A Lista de Compras (forEach)

let carrinho = ["Maçã", "Pão", "Leite", "Café"];

// O método forEach executa uma função de callback para cada item
carrinho.forEach((item, index) => {
    // index começa em 0, então somamos 1 para a exibição ficar amigável
    console.log(`Produto ${index + 1}: ${item}`);
});

/*
 * EXPLICAÇÃO TEÓRICA:
 * Diferente do 'for' convencional (modo Imperativo - onde ditamos o passo a passo da 
 * iteração através do controle do índice 'i'), o .forEach() é uma abordagem 
 * Declarativa. O array já "sabe" o seu próprio tamanho e invoca a Arrow Function 
 * automaticamente em cada índice, inserindo o valor correspondente no parâmetro "item" 
 * e a posição atual no parâmetro "index". O código fica mais limpo e menos propício 
 * a erros de "Index Out of Bounds" (fugas do limite de memória).
 */