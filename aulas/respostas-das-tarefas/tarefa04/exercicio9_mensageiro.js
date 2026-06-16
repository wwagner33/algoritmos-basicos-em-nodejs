// 9. O Mensageiro Poliglota (Default Parameters)

// Atribui o "pt" direto na declaração do parâmetro
function saudarUsuario(nome, idioma = "pt") {
    switch(idioma) {
        case "en":
            return `Hello, ${nome}!`;
        case "es":
            return `¡Hola, ${nome}!`;
        case "pt":
        default:
            return `Olá, ${nome}!`;
    }
}

// Testando com idioma inglês definido
console.log(saudarUsuario("John", "en"));

// Testando omitindo o parâmetro (ativando o Default fallback)
console.log(saudarUsuario("Ana"));

/*
 * EXPLICAÇÃO TEÓRICA:
 * Antes do ES6, programadores tinham que verificar o idioma manualmente usando 
 * if(idioma === undefined) { idioma = "pt" }. Os parâmetros padrão (default 
 * parameters) resolvem isso a nível de sintaxe. Se a função não recebe o 
 * argumento exigido em sua chamada, ela recarrega a variável com o valor da direita 
 * do sinal de igual, evitando o erro de 'undefined'.
 */