// Uma função recursiva sem caso-base (condição de parada)
function recursaoInfinita(contador) {
    // Se ativarmos isso, ela vai rodar até a memória da pilha esgotar
    return recursaoInfinita(contador + 1);
}

// Captura o erro que ocorre quando a pilha de chamadas é esgotada
try {
    console.log("Iniciando recursão infinita...");
    recursaoInfinita(1);
} catch (erro) {
    // O Node.js irá capturar o erro de esgotamento de memória da call stack
    console.error("Erro capturado:", erro.message);
    // Saída: Erro capturado: Maximum call stack size exceeded
}