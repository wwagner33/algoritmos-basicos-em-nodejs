const {gerarInteiroAleatorio,gerarListaInteirosAleatorios} = require('../matematicos/gerador-inteiros-aleatorios');

let lista100 = gerarListaInteirosAleatorios(100, 1, 1000);
let lista1000 = gerarListaInteirosAleatorios(1000, 1, 10000);
let lista1M = gerarListaInteirosAleatorios(1_000_000, 1, 10_000_000);

module.exports = {
  lista100,
  lista1000,
  lista1M
}