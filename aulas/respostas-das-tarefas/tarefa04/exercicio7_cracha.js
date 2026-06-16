// 7. O Gerador de Crachás

function gerarCracha(nome, departamento, id) {
    // Uso das Template Strings para interpolação avançada
    // Note a crase (`) isolando a expressão.
    return `[${id}] - ${nome.toUpperCase()}: ${departamento}`;
}

console.log(gerarCracha("Carlos", "TI", 404));

/*
 * EXPLICAÇÃO TEÓRICA:
 * As Template Strings (adicionadas no ES6) substituíram o antigo e verboso método 
 * de concatenação com sinal de mais ("[" + id + "] - " + nome + ...). 
 * Usando o cifrão com chaves ${}, o JavaScript resolve primeiro o que está dentro das 
 * chaves (como a função toUpperCase() atrelada ao nome) antes de imprimir a string 
 * final, facilitando muito a legibilidade do código-fonte.
 */