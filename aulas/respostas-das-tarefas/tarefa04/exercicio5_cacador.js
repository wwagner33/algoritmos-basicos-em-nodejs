// 5. O Caçador de Domínios

function extrairDominio(email) {
    // 1. Localiza a posição exata da arroba no texto
    let posicaoArroba = email.indexOf("@");
    
    // Verifica se a arroba existe para prevenir erros
    if (posicaoArroba === -1) return "E-mail inválido";

    // 2. Corta a string a partir de (posicaoArroba + 1) até o fim
    let dominio = email.slice(posicaoArroba + 1);
    
    return dominio;
}

const entradaEmail = "aluno.estudioso@universidade.edu.br";
console.log("E-mail:", entradaEmail);
console.log("Domínio extraído:", extrairDominio(entradaEmail));

/*
 * EXPLICAÇÃO TEÓRICA:
 * O método .indexOf() é uma busca sequencial nativa da linguagem para texto.
 * Usamos "posicaoArroba + 1" dentro do .slice() porque queremos iniciar a captura 
 * EXATAMENTE um caractere após o '@'. Caso não usássemos o +1, a saída 
 * resultaria em "@universidade.edu.br".
 */