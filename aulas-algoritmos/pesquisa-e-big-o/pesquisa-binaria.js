function pesquisaBinaria(lista, item) {
  let esq = 0;
  let dir = lista.length - 1;

  while (esq <= dir) {
    let meio = Math.floor((esq + dir) / 2);
    let chute = lista[meio];

    if (chute === item) {
      return meio;
    }
    if (chute > item) {
      dir = meio - 1;
    } else {
      esq = meio + 1;
    }
  }
  return null;
}

const minhaLista = [1, 3, 5, 7, 9, 13,25,67,89,100];
console.log(`Resposta da Busca: ${pesquisaBinaria(minhaLista, 13)}`); 
console.log(`Resposta da Busca: ${pesquisaBinaria(minhaLista, 10)}`);
