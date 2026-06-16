// 2. Inversão de Array sem .reverse()

function inverterArray(lista) {
    let n = lista.length;
    
    // O laço percorre apenas metade do array: Math.floor(n / 2)
    for (let i = 0; i < Math.floor(n / 2); i++) {
        // Regra de Ouro: variável let temp criada no bloco
        let temp = lista[i]; 
        
        // Posição oposta é (n - 1) menos o deslocamento i
        let indiceOposto = n - 1 - i; 
        
        lista[i] = lista[indiceOposto];
        lista[indiceOposto] = temp;
    }
    
    return lista;
}

const arrayOriginal = [10, 20, 30, 40, 50]; // Teste com número ímpar e par de elementos
console.log("Array original:", [10, 20, 30, 40, 50]);
console.log("Array invertido:", inverterArray(arrayOriginal));

/*
 * EXPLICAÇÃO TEÓRICA:
 * Por que iteramos apenas até a metade do array?
 * Se percorrêssemos o array inteiro, acabaríamos "desfazendo" a troca ao passar 
 * da metade. Ao trocar o primeiro com o último, o segundo com o penúltimo, etc., 
 * quando chegamos na metade (Math.floor), todo o conjunto já foi espelhado com sucesso.
 * O uso de uma variável temporária ('temp') previne que o valor de lista[i] seja 
 * sobrescrito e perdido na memória antes que possamos enviá-lo para a outra ponta.
 */