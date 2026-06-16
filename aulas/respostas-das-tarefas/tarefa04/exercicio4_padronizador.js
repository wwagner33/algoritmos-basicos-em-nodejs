// 4. O Padronizador de Nomes

function formatarNome(nomeBaguncado) {
    // 1. Pega a primeira letra e transforma em maiúscula
    let primeiraLetra = nomeBaguncado.charAt(0).toUpperCase();
    
    // 2. Extrai da segunda letra em diante e converte tudo para minúscula
    let restanteNome = nomeBaguncado.slice(1).toLowerCase();
    
    // 3. Concatena os pedaços
    return primeiraLetra + restanteNome;
}

const entradaNome = "mArIA";
console.log("Entrada:", entradaNome);
console.log("Nome Formatado:", formatarNome(entradaNome));

/*
 * EXPLICAÇÃO TEÓRICA:
 * Strings no JavaScript são indexadas de forma semelhante aos arrays (começam em 0).
 * O método .charAt(0) aponta estritamente para o primeiro caractere.
 * O método .slice(1) instrui o interpretador a "fatiar" a string partindo do índice 1 
 * (a segunda letra) até o final. 
 * Esta técnica é essencial para higienização de dados em bancos de dados e interfaces.
 */