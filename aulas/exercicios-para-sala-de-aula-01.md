# Exercícios para Sala de Aula

*26/05/2026*
*Prof. Wellington Sarmento*

## 1) O Detetive de Divisores

**Contexto:** Muitos iniciantes criam laços que sobrecarregam o computador sem necessidade. Vamos mostrar como a matemática pode poupar o processador.

**O Desafio:**
Escreva uma função chamada `contarDivisores(n)` que recebe um número inteiro positivo e retorna quantos divisores ele tem.

1. Use um laço `for` que percorre de $1$ até $n$.
2. Se encontrarmos um divisor $d$ que seja menor que $\sqrt{n}$, podemos automaticamente descobriu outro divisor ($n/d$). Refaça a rotina `contarDivisores(n)`, usando esta informação.
3. Use `console.time()` e `console.timeEnd()` para comparar o tempo de execução das duas versões com o número $999.999.999$.

> **Dica:** Lembre-se de tratar o caso onde o número é um "quadrado perfeito" (como $5 \times 5 = 25$), para não contar o mesmo divisor duas vezes!

## 2) Inversão de *Array*

**Contexto:** A troca de valores (*swap*) usando uma variável temporária é uma das manobras mais fundamentais na programação.

**O Desafio:**
Crie uma função chamada `inverterArray(lista)` que inverta a ordem dos elementos de um array **sem usar o método nativo `.reverse()**`.

1. Você deve percorrer apenas **metade** do array.
2. Em cada passo, troque o elemento da posição `i` pelo elemento da posição correspondente no final do array.
3. **Regra de Ouro:** Declare a variável `temp` obrigatoriamente dentro do bloco do laço `for`, utilizando `let`.

**Exemplo de entrada:** `[10, 20, 30, 40]`
**Saída esperada:** `[40, 30, 20, 10]`

## 3) O Filtro de Elementos (Iteração de Array com `for`)

**Contexto:** Arrays são a base para gerenciar coleções de dados. Antes de utilizarmos métodos avançados, é essencial dominar a iteração manual, pois ela nos dá controle total sobre o fluxo de execução.

**O Desafio:**
Crie uma função chamada `filtrarPares(numeros)` que receba um array de números inteiros.

1. Utilize um laço `for` clássico (com inicialização, condição e incremento) para percorrer cada elemento do array.
2. Identifique os números pares e adicione-os a um novo array chamado `pares`.
3. Retorne o array `pares` ao final da execução.

**Exemplo de entrada:** `[3, 8, 15, 22, 42, 7]`
**Saída esperada:** `[8, 22, 42]`

## 4) O Padronizador de Nomes (Alteração de Strings com `toUpperCase`)

**Contexto:** Quando recebemos dados de usuários, é comum que a formatação venha bagunçada (como letras maiúsculas no meio de palavras). Padronizar esses dados é uma tarefa diária no desenvolvimento de software.

**O Desafio:**
Crie uma função chamada `formatarNome(nomeBaguncado)` que receba uma string com o nome de uma pessoa escrito de forma irregular.

1. A função deve transformar a primeira letra em maiúscula utilizando `.toUpperCase()`.
2. O restante do nome deve ser transformado em letras minúsculas utilizando `.toLowerCase()`.
3. Concatene as duas partes e retorne o nome corrigido.

**Exemplo de entrada:** `"mArIA"`
**Saída esperada:** `"Maria"`

## 5) O Caçador de Domínios (Extração de Substrings)

**Contexto:** Frequentemente precisamos extrair apenas um "pedaço" de um texto maior, como a sigla de um estado em um endereço completo ou o domínio de um e-mail para descobrir a empresa do usuário.

**O Desafio:**
Crie uma função chamada `extrairDominio(email)` que receba um endereço de e-mail completo.

1. Utilize o método `.indexOf()` para encontrar a posição do caractere `@`.
2. Use o método `.slice()` ou `.substring()` para extrair apenas o domínio (tudo o que vem logo após o `@`).
3. Retorne o domínio extraído.

> **Dica:** O método `.slice(inicio)` extrai da posição `inicio` até o final da string caso o segundo parâmetro seja omitido.

**Exemplo de entrada:** `"aluno.estudioso@universidade.edu.br"`
**Saída esperada:** `"universidade.edu.br"`

## 6) A Porta de Segurança (Comparação de Strings)

**Contexto:** O JavaScript é *case-sensitive*, o que significa que "Senha" e "senha" são consideradas palavras diferentes. Além disso, espaços acidentais podem causar falhas em sistemas de login.

**O Desafio:**
Escreva uma função `verificarAcesso(senhaDigitada, senhaCadastrada)` que compara duas strings.

1. A função deve remover quaisquer espaços em branco no início e no final de ambas as strings usando `.trim()`.
2. Em seguida, deve realizar uma comparação **ignorando letras maiúsculas e minúsculas** (transforme ambas para o mesmo caso antes de comparar).
3. Retorne `true` se forem iguais e `false` caso contrário.

**Exemplo de entrada:** `"   Secreta123  "`, `"secreta123"`
**Saída esperada:** `true`

## 7) O Gerador de Crachás (Operações com Strings)

**Contexto:** Construir mensagens ou documentos dinâmicos juntando textos fixos com variáveis é o que torna as páginas web interativas e personalizadas para cada usuário.

**O Desafio:**
Crie uma função `gerarCracha(nome, departamento, id)` que una essas informações.

1. A função deve concatenar os parâmetros para formar o texto exato do crachá.
2. Você pode utilizar o operador `+` ou as modernas *Template Strings* (crases ``` e `${}`).
3. O formato de retorno deve ser estritamente: `[ID] - NOME: departamento`.

**Exemplo de entrada:** `"Carlos"`, `"TI"`, `404`
**Saída esperada:** `"[404] - CARLOS: TI"` (Observe que o nome deve ficar todo em maiúsculo na saída!)

## 8) A Calculadora de Descontos

**Contexto:** A funções podem receber valores, chamados **parâmetros**, armazená-los em variáveis e efetuar operações sobre estes valores, retornando o resultado deste processamento. Desta forma, elas agem como pequenas "fábricas", processando entradas e gerando resultados, como saída.

**O Desafio:**
Crie uma função `calcularPrecoFinal(valorProduto, porcentagemDesconto)` que processe uma venda.

1. A função deve calcular quanto vale o desconto em dinheiro.
2. Subtraia esse desconto do valor original do produto.
3. Retorne o valor final a ser pago pelo cliente.

> **Dica:** O cálculo do desconto é feito pela fórmula: $Desconto = Valor \times \frac{Porcentagem}{100}$.

**Exemplo de entrada:** `150`, `20`
**Saída esperada:** `120`

## 9) O Mensageiro Poliglota

**Contexto:** Em sistemas maduros, muitas vezes o usuário não preenche todas as opções disponíveis. Podemos usar "parâmetros padrão" (*default parameters*) para assumir valores automáticos sem precisarmos escrever muitos blocos de `if/else`.

**O Desafio:**
Escreva uma função `saudarUsuario(nome, idioma = "pt")`.

1. A função deve verificar o parâmetro `idioma`.
2. Se for `"pt"`, retorne `"Olá, [nome]!"`. Se for `"en"`, retorne `"Hello, [nome]!"`. Se for `"es"`, retorne `"¡Hola, [nome]!"`.
3. Teste a função omitindo o segundo parâmetro para ver o valor padrão em ação.

**Exemplo de entrada:** `saudarUsuario("Ana")`
**Saída esperada:** `"Olá, Ana!"`

## 10) Encurtando o Código

**Contexto:** As *Arrow Functions* surgiram no ES6 para tornar o código mais limpo e conciso, sendo amplamente utilizadas como funções de callback e em métodos de manipulação de arrays modernos.

**O Desafio:**
Observe a função clássica abaixo, que converte uma temperatura de Celsius para Fahrenheit:

```javascript
function converterParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

```

1. Reescreva essa mesma lógica criando uma **função anônima** e atribuindo-a a uma constante chamada `converterParaFahrenheit`.
2. Utilize a sintaxe de *Arrow Function* (`=>`).
3. Se possível, simplifique-a para o formato de retorno implícito (em uma única linha, omitindo as chaves `{}` e a palavra `return`).

## 11) A Lista de Compras

**Contexto:** Enquanto o laço `for` tradicional exige um controle manual de índices, o método `.forEach()` nos permite executar uma função diretamente para cada item de um array, deixando a leitura do código mais natural (declarativa).

**O Desafio:**
Você tem um array de produtos: `let carrinho = ["Maçã", "Pão", "Leite", "Café"]`.

1. Utilize o método `.forEach()` para percorrer o array.
2. Para cada elemento, exiba no console uma mensagem formatada contendo a posição do item e o nome dele.
3. O índice deve começar em 1, não em 0 (apenas visualmente).

**Saída esperada no console:**

```bash
Produto 1: Maçã
Produto 2: Pão
Produto 3: Leite
Produto 4: Café

```

> ### PARADA OBRIGATÓRIA: O que significa a sigla ES6?
> 
> No **Exercício 10**, mencionamos que as *Arrow Functions* surgiram no **ES6**. Mas o que exatamente é isso?
O **ES6** é a abreviação de **ECMAScript 6** (oficialmente chamado de ECMAScript 2015). O ECMAScript é o "manual de regras" ou a especificação padrão que dita como a linguagem JavaScript deve funcionar em qualquer navegador.
>
>A sexta edição desse manual (ECMAScript Version 6 - ES6), lançada no ano de 2015, foi uma das maiores atualizações sofridas pela linguagem JavaScript. Ela modernizou completamente a linguagem e introduziu ferramentas que hoje consideramos indispensáveis no dia a dia, como:
> * A sintaxe enxuta das **Arrow Functions** (`=>`);
> * A criação de variáveis com **`let`** e **`const`** (que trouxeram mais segurança em relação ao antigo `var`);
> * As **Template Strings** (o uso de crases e `${}` que vimos no Exercício 7);
> * Os **Parâmetros Padrão** em funções (que vimos no Exercício 9).
> 
> É por causa do impacto gigantesco dessa atualização que, no mundo do desenvolvimento web, frequentemente dividimos a história da linguagem entre o "JavaScript Clássico" (antes de 2015) e o "JavaScript Moderno" (do ES6 em diante).

## Referências para Estudo

Abaixo, uma lista de referências para leitura que ajudarão na resulução dos exercícios.

* **Estruturas de repetição (Laço `for`)**: [MDN - for statement](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for)
* **Manipulação e Métodos de String**: [MDN - String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
* **Extração de textos (`slice` vs `substring`)**: [MDN - String.prototype.substring()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
* **Template Literals (Strings complexas)**: [MDN - Template strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals)
* **Funções e Passagem de Parâmetros**: [MDN - Functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
* **Parâmetros Predefinidos (Default Parameters)**: [MDN - Parâmetros Predefinidos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* **Arrow Functions**: [MDN - Arrow function expressions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* **Iteração em Arrays (`forEach`)**: [MDN - Array.prototype.forEach()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
