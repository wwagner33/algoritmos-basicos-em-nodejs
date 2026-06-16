// 8. A Calculadora de Descontos

function calcularPrecoFinal(valorProduto, porcentagemDesconto) {
    // Aplicação fiel da fórmula matemática
    let desconto = valorProduto * (porcentagemDesconto / 100);
    
    let valorFinal = valorProduto - desconto;
    
    return valorFinal;
}

console.log("Valor final a pagar: R$", calcularPrecoFinal(150, 20));

/*
 * EXPLICAÇÃO TEÓRICA:
 * Esta função demonstra o conceito de delegação de responsabilidades. Uma lógica de 
 * e-commerce poderia reusar essa mesma função para centenas de produtos no carrinho 
 * de compras, bastando passar valores diferentes (parâmetros) na entrada para gerar
 * o comportamento desejado na saída.
 */