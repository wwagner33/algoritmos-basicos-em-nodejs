// Um nṹmero inteiro é divisível por outro se o resto desta divisão for "0" (zero). Por exemplo, o número "10" é divisível por "5" porque o resultado da divisão de "10" por "5" é "2", e o resto é "0". Já o número "11" não é divisível por "5" porque o resultado da divisão de "11" por "5" é "2", mas o resto é "1".    
// Se o número é "i" e seu divisor for "n", posso realiar uma operação de Módulo para verificar se "n" é divisor de "i".
// Usamos "%" para realizar a operação de Módulo em Javscript.
// i%n === 0 -> "i" é divisível por "n"

// Observação: "===" testa se os valores são iguais e os tipos das variáveis, também.


// V1: Versão da Função que não substitui os números divisíveis por 3 e 5, por "FizzBuzz".
function fizzBuzzV1(){
    let saida = "";
    for(let i=1;i<=100;i++){
        if(i%3 ===0){
            saida+="Fizz"; // saida = saida + "Fizz"
        } else if(i%5 ===0){
            saida+="Buzz"; // saida = saida + "Buzz"
        } else {
            saida+=i; // saida = saida + i
        }

    }
    return saida;
}

// console.log(fizzBuzzV1());

// V2: Versão da Função que substitui os números divisíveis por 3 e 5, por "FizzBuzz".  

function fizzBuzzV2(){
    let saida = "";
    for(let i=1;i<=100;i++){
        if(i%3 ===0 && i%5 ===0){
            saida+="FizzBuzz"; // saida = saida + "FizzBuzz"
        } else if(i%3 ===0){
            saida+="Fizz"; // saida = saida + "Fizz"
        } else if(i%5 ===0){
            saida+="Buzz"; // saida = saida + "Buzz"
        } else {
            saida+=i; // saida = saida + i
        }

    }
    return saida;
}

console.log(fizzBuzzV2());