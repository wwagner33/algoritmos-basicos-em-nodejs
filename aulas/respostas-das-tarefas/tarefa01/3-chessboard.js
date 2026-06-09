function imprimirTabuleiro(tam) {
    let tabuleiro = "";
    for(let linha=0;linha<tam;linha++){
        for(let coluna=0;coluna<tam;coluna++){
            if((linha+coluna)%2===0){
                tabuleiro += " ";
            }else{
                tabuleiro += "#";
            }
        }
        tabuleiro += "\n"; //tabuleiro = tabuleiro + "\n".
    }
    return tabuleiro;
}
console.log(imprimirTabuleiro(10));