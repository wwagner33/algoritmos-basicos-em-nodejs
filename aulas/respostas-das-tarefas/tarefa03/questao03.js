// 3. Método Trial Division para Números Primos

function isPrime(n) {
    if (n <= 1) return false;
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const numeroTeste = 17;
console.log(`O número ${numeroTeste} é primo?`, isPrime(numeroTeste));

console.log(`
--- ANÁLISE DO MÉTODO TRIAL DIVISION ---
Por que essa abordagem se torna inviável para descobrir se um número de 10 dígitos é primo?
R: Um número de 10 dígitos (por exemplo, 9.999.999.967) obrigaria o laço de repetição
a realizar cerca de 10 bilhões de divisões sucessivas. Em termos computacionais, 
essa abordagem cresce de forma linear O(N) e faz com que a CPU leve vários segundos 
ou até minutos processando um único número. Para sistemas de criptografia que usam 
primos de centenas de dígitos, esse algoritmo primitivo travaria a máquina, sendo 
totalmente inviável.
`);