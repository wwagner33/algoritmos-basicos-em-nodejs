function tornaMaiusculo(texto) {
    //Esta função tenta converter o texto par maiúsculo
    //Parâmetro: texto - String
    if(typeof texto !== 'string') {
        console.log(`O valor fornecido para texto é do tipo ${typeof texto}, mas era esperado uma string.`);
        return null;
    }
    try {
         return texto.toUpperCase();
    } catch (error) {
        console.log('Ocorreu um erro pois você forneceu um valor numérico e não um valor alfanumérico: ');
        return null;
    }
}
console.log(tornaMaiusculo([78,2])); 


