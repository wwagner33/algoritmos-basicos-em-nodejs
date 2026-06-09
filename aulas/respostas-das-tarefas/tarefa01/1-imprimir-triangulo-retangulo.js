function imprimirTrianguloRetangulo(altura){
    let linha = ""; //String vazia

    for(let i=1; linha.length<altura; i++){ //i é uma variável contadora
        linha += "#"; //linha = linha + "#";
        console.log(`Linha ${i}: ${linha}`);
    }
}

//Resposta Alternativa

function imprimirTrianguloRetanguloAlt(altura){
    for(let linha="#";linha.length<=altura;linha+="#"){
        console.log(linha);
    }
}

imprimirTrianguloRetangulo(7);