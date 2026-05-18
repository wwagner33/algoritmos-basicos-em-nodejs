// 1. Função de Busca Binária modificada para contar etapas
function pesquisaBinaria(lista, item) {
  let baixo = 0;
  let alto = lista.length - 1;
  let etapas = 0; // Novo contador de etapas

  while (baixo <= alto) {
    etapas++; // Incrementa 1 a cada tentativa de busca
    
    let meio = Math.floor((baixo + alto) / 2);
    let chute = lista[meio];

    if (chute === item) {
      // Retorna um objeto com o índice e o total de etapas
      return { indice: meio, etapas: etapas }; 
    }
    if (chute > item) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }
  
  // Se não encontrar o item, retorna null para o índice e as etapas gastas
  return { indice: null, etapas: etapas }; 
}

// 2. Funções auxiliares mantidas
function gerarInteiroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarListaInteirosAleatorios(tamanho, min, max) {
  const lista = [];
  for (let i = 0; i < tamanho; i++) {
    lista.push(gerarInteiroAleatorio(min, max));
  }
  return lista;
}

// --- TESTANDO O CÓDIGO ---

const tamanhoDaLista = 512; // Experimente mudar para 256, 512, etc.

// Gera a lista aleatória
let minhaLista = gerarListaInteirosAleatorios(tamanhoDaLista, 1, 1000);

// ATENÇÃO: A busca binária exige que a lista esteja ordenada!
minhaLista.sort((a, b) => a - b); 

// Vamos escolher o último item da lista para garantir que ele exista e testar o pior caso
let indiceAleatorioParaBuscar = tamanhoDaLista - 1;
let itemProcurado = minhaLista[indiceAleatorioParaBuscar];

console.log(`Tamanho da lista: ${tamanhoDaLista} itens`);
console.log(`Procurando o número: ${itemProcurado}`);

// Executa a busca
let resultado = pesquisaBinaria(minhaLista, itemProcurado);

if (resultado.indice !== null) {
  console.log(`Item encontrado no índice: ${resultado.indice}`);
} else {
  console.log("Item não encontrado na lista.");
}

console.log(`Total de etapas (tentativas): ${resultado.etapas}`); //Note que o computador precisou de 7 etapas para isolar o item, e mais uma etapa para confirmar que ele é o item procurado, totalizando 8 etapas.