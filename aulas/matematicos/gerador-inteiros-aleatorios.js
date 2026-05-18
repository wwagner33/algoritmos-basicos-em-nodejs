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

module.exports = {
  gerarInteiroAleatorio,
  gerarListaInteirosAleatorios
}