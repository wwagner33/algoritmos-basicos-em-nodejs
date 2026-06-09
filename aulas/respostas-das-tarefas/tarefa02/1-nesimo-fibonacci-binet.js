
//Série de Fibonacci: 0,1,1,2,3,5,8,13,21,34,55,89,144...

// console.log(Math.sqrt(5)); //Raiz quadrada de 5
// console.log(Math.floor(1.34)); //Maior Valor Inteiro próximo deste valor dado
// console.log(Math.pow(5,2)); //Potencia: 5^2 = 25

function nEsimoFibonacci(n) {
    let phi = (1 + Math.sqrt(5)) / 2;
    let psi =(1 - Math.sqrt(5)) / 2;
    let fibonacci = (Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5);
    
    return Math.round(fibonacci);
}
let nEsimo =12;
console.log(`O ${nEsimo}º termo da sequência de Fibonacci: ${nEsimoFibonacci(nEsimo)}`);