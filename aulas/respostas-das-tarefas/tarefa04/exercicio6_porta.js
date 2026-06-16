// 6. A Porta de Segurança

function verificarAcesso(senhaDigitada, senhaCadastrada) {
    // .trim() remove os espaços invisíveis do começo e do fim
    // .toLowerCase() força tudo para um formato único (minúsculo)
    let formatadaDigitada = senhaDigitada.trim().toLowerCase();
    let formatadaCadastrada = senhaCadastrada.trim().toLowerCase();

    // Compara estritamente
    return formatadaDigitada === formatadaCadastrada;
}

const inputUser = "   Secreta123  ";
const bancoDados = "secreta123";

console.log("Tentativa de Login válida?", verificarAcesso(inputUser, bancoDados));

/*
 * EXPLICAÇÃO TEÓRICA:
 * Os espaços em branco ocultos gerados por cópia e cola ou pelo corretor ortográfico
 * dos celulares geram o caractere " " na memória, alterando completamente a string. 
 * O método .trim() age como uma guilhotina nas extremidades da variável.
 * Adotar o .toLowerCase() é um padrão do setor para realizar "Case-Insensitive Match" 
 * (verificação indiferente a maiúsculas/minúsculas).
 */