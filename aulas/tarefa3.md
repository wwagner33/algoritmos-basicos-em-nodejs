# Trabalho em Equipe da disciplina de Programação 2
**Prof. Wellington Sarmento**

Aqui está uma proposta de introdução estruturada para você incluir no início do material, redigida com um tom acadêmico e prático, pronta para ser apresentada à turma:

## Introdução aos Desafios Práticos: Além da Teoria dos Algoritmos

Olá, alunas e alunos! 

O livro *Entendendo Algoritmos* oferece uma base teórica fantástica e visual sobre como as estruturas de dados e os algoritmos funcionam. No entanto, o desenvolvimento real de sistemas e mídias digitais exige que vocês compreendam não apenas a teoria, mas como esses conceitos se comportam no mundo real, rodando em motores modernos e lidando com limites físicos de hardware, memória e processamento.

Por isso, esta lista de 20 atividades não é um mero questionário de repetição. Ela foi desenhada para tirar vocês da zona de conforto conceitual e colocá-los de frente com problemas de engenharia de software. Os exercícios estão divididos em quatro eixos fundamentais:

1. **Busca e Análise de Complexidade:** Focado em provar na prática (medindo em milissegundos) como a notação Big O se comporta ao lidarmos com volumes massivos de dados.
2. **Estruturas Dinâmicas e Alocação:** Criado para expor os "custos ocultos" da manipulação de *arrays* nativos e a importância de gerenciar a memória com sabedoria ao criar filas e pilhas.
3. **Domínio da Recursividade:** Um mergulho no controle de fluxo e na arquitetura da *Call Stack* (Pilha de Chamadas), mostrando o poder da recursão, mas também seus perigos (como o estouro de memória).
4. **Estratégias de Dividir para Conquistar:** Onde vocês aplicarão o particionamento lógico para resolver problemas complexos, simulando as bases de algoritmos de alta performance como o *Quicksort*.

### Conhecimentos Necessários (Além do Livro)

Para resolver estes desafios, vocês perceberão que o livro base não será suficiente. Este é um trabalho em equipe que exigirá pesquisa ativa. Vocês precisarão investigar e debater tópicos específicos do ecossistema JavaScript/Node.js, tais como:

* **O Motor V8 do JavaScript:** Como ele otimiza *arrays* e ordenações "por debaixo dos panos" (ex: o uso do *TimSort* no `.sort()` nativo).
* **Limites de Memória e Call Stack:** Qual é o limite de chamadas recursivas que o Node.js suporta antes de estourar?
* **Manipulação de Tempo e Benchmarking:** O uso da API `perf_hooks` para medir performance de execução com precisão de frações de milissegundo.

### Um Breve Guia sobre o Módulo `fs` e `Streams`

Em vários exercícios, vocês terão que ler arquivos muito grandes (como logs de 2GB ou bases de dados gigantes). Para isso, precisarão dominar ferramentas do Node.js:

* **O Módulo `fs` (File System):** É a biblioteca nativa do Node.js que permite ao JavaScript interagir com o sistema operacional para ler, criar e modificar arquivos. Geralmente, ensina-se a usar o `fs.readFileSync()`, que pega o arquivo inteiro e o coloca na memória RAM de uma vez.
* **As `Streams`:** Se vocês tentarem ler um arquivo de 2GB usando `readFileSync`, o programa provavelmente vai travar por falta de memória (RAM). As `Streams` resolvem isso. Elas permitem ler o arquivo em pequenos "pedaços" (*chunks*). O programa lê um pedaço, processa a informação (ex: busca a palavra desejada), descarta esse pedaço da memória e lê o próximo. É como assistir a um vídeo no YouTube (streaming) em vez de baixar o vídeo inteiro de 5GB antes de dar o play.

### Referências Sugeridas para Pesquisa

Para auxiliar a equipe nas discussões e na implementação dos códigos, recomendo a consulta das seguintes fontes:

1. **MDN Web Docs (Mozilla Developer Network):** A "bíblia" do JavaScript. Usem para entender o funcionamento profundo dos métodos de *Array*, *Objects* e limites da linguagem. *(developer.mozilla.org)*
2. **Documentação Oficial do Node.js:** Fundamental para entender as APIs nativas, especificamente as seções sobre `fs`, `stream` e `perf_hooks`. *(nodejs.org/docs)*
3. **Artigos sobre o V8 JavaScript Engine:** Pesquisem no Google por "V8 Engine arrays optimization" ou "How Array.prototype.sort works in V8". O blog oficial do V8 *(v8.dev)* tem textos excelentes sobre isso.
4. **Big-O Cheat Sheet:** Um guia rápido e visual maravilhoso para relembrar as complexidades de tempo e espaço de diversas estruturas de dados e algoritmos. *(bigocheatsheet.com)*



## Atividades

### Eixo 1: Busca e Análise de Complexidade
1. **Otimização de Busca Geoespacial:** Desenvolvam um script Node.js que processe um grande ficheiro de texto CSV contendo milhares de coordenadas e registos de lotes de terra. Implementem uma pesquisa linear e uma pesquisa binária pelo `id` do lote. Utilizem a API `perf_hooks` do Node.js para debater a diferença real de tempo de execução entre as duas abordagens.
2. **Dicionário de Autocompletar Estático:** Criem um sistema de autocompletar que carrega 100.000 palavras num *array* previamente ordenado. Em vez de usar um `.filter()` com `.startsWith()` (que varreria o *array* todo), implementem uma Pesquisa Binária modificada para encontrar apenas o "intervalo" (primeiro e último índice) das palavras que começam com o prefixo digitado. Debatam o ganho de performance.
3. **Análise de Ficheiros de Log Massivos:** Escrevam um programa que encontre a primeira ocorrência de um erro `[500 Internal Server Error]` num ficheiro de log de servidor de 2GB. Como a pesquisa se altera se usarem as `Streams` do Node.js em vez de carregar o ficheiro inteiro na RAM com `fs.readFileSync`? Discutam o impacto espacial.
4. **Pesquisa de Proximidade em *array*s Numéricos:** Modifiquem o algoritmo de pesquisa binária padrão. Em vez de retornar `-1` quando o elemento não for encontrado, o algoritmo deve retornar o índice do valor *mais próximo* do valor procurado dentro de um *array* de leituras de sensores contínuos.
5. **Divergência entre Teoria e Prática (Motor V8):** Escrevam um módulo de benchmark para medir o tempo exato de procurar um item no início, no meio e no final de *array*s de tamanho $10^4$, $10^5$ e $10^6$. Debatam: a notação Big O teórica reflete-se sempre milissegundo a milissegundo na prática? Como as otimizações internas do motor V8 do JavaScript interferem nisso?

### Eixo 2: Estruturas Dinâmicas e Alocação
6. **O Gargalo do Shift em Filas:** A simulação de filas de eventos no Node.js costuma usar *array*s com `push()` (para entrar) e `shift()` (para sair). Como o `shift()` reindexa todo o *array*, custa $O(n)$. O desafio da equipa é criar uma classe de Fila (Queue) que use um Objeto literal (`{}`) com dois índices numéricos (ponteiro de início e ponteiro de fim) para garantir que a inserção e remoção sejam $O(1)$.
7. **Ordenação de Ativos Multimédia:** Implementem o algoritmo *Selection Sort* do zero para ordenar um *array* complexo de objetos que representam recursos gráficos (ex: texturas). A ordenação deve obedecer a múltiplos critérios sequenciais: primeiro por tamanho do ficheiro (decrescente) e, em caso de empate, por ordem alfabética do nome.
8. **Gestor de Estados (Undo/Redo) com Duas Pilhas:** Implementem a funcionalidade de "Desfazer/Refazer" de uma ferramenta de desenho utilizando a abordagem de **Duas Pilhas** (Stacks). Usem dois *array*s nativos, mas a regra é estrita: só é permitido usar `.push()` e `.pop()`. A equipa deve debater e prever o que acontece com a pilha de "Refazer" quando um novo traço é feito no meio de um estado desfeito.
9. **Simulador de Múltiplas Filas (O Problema do Caixa Rápido):** Desenvolvam um modelo onde as requisições chegam e devem ser alocadas no servidor (representado por um *array* de *array*s) com o menor número de tarefas pendentes. Qual a complexidade estrutural de iterar sobre todos os servidores para encontrar a menor fila cada vez que um novo item chega?
10. **Custom Sort vs. V8 TimSort:** O `*array*.prototype.sort()` do Node.js usa um algoritmo altamente otimizado. Gravem um *array* com 100.000 números aleatórios e ordenem-no usando o Selection Sort que implementaram no exercício 7 e o `.sort()` nativo. Documentem e debatam a diferença abissal de desempenho.

### Eixo 3: Domínio da Recursividade
11. **Navegador de Sistemas de Ficheiros Profundos:** Usando o módulo nativo ``fs`, escrevam uma função recursiva que calcule o tamanho total, em bytes, de um diretório que possui vários subdiretórios em níveis de profundidade desconhecidos.
12. **Deteção de Loops em Estados Dependentes:** Ao programar a lógica de estados para IA num jogo, é perigoso criar transições que fiquem em loop infinito. Escrevam uma função recursiva que percorra um objeto de transições e implemente um mecanismo de "memória" (usando um *array* simples que guarda os IDs dos estados já visitados) para parar a recursão e lançar um erro tratável antes de estourar a pilha de chamadas.
13. **O Balde de Tinta (Flood Fill):** Implementem o algoritmo "Flood Fill" de forma recursiva. Dado um *array* bidimensional (matriz construída com *array*s de *array*s) representando uma grelha de píxeis, a função deve substituir os valores de uma área contígua. Debatam: qual o limite de tamanho da matriz antes de a pilha de chamadas estourar no Node.js?
14. **A Árvore de Decisão do Troco (Coin Change):** Escrevam uma função recursiva que receba um valor em cêntimos (ex: 25) e um *array* com os valores das moedas disponíveis (ex: `[1, 5, 10, 25]`). A função deve retornar *quantas combinações diferentes* de moedas podem formar aquele valor exato. Debatam como a recursão cria uma árvore de possibilidades invisível na memória e por que o tempo de execução cresce tão rápido.
15. **Parser de Árvore de Interface:** Dado um objeto de configuração complexo, carregado na memória, que representa uma estrutura hierárquica de componentes UI (onde cada objeto tem um *array* `children`), escrevam uma função recursiva que extraia para um *array* plano (flat) apenas os IDs dos componentes marcados com `isVisible: true`.

### Eixo 4: Estratégias de Dividir para Conquistar
16. **O Maior Lucro Contíguo (Maximum Sub*array*):** Dado um *array* de números inteiros (positivos e negativos) que representam o lucro ou prejuízo diário de uma loja, encontrem o período contíguo (sub-*array*) que gerou o maior lucro total. Em vez de usar força bruta ($O(n^2)$), resolvam usando a estratégia de Dividir para Conquistar: dividam o *array* ao meio e verifiquem o maior lucro na metade esquerda, na direita, e o lucro que cruza o meio.
17. **O Problema do Par de Pontos Mais Distantes:** Em vez de força bruta ($O(n^2)$), pesquisem e debatam como a técnica de dividir para conquistar pode ser adaptada para encontrar os dois pontos 2D (x, y) mais distantes (ou mais próximos) dentro de um *array* massivo de coordenadas cartesianas.
18. **Operações em Matrizes e Tensores:** Em contextos que simulam bibliotecas de álgebra linear, implementem uma função recursiva baseada no paradigma dividir-para-conquistar que realize a soma dos elementos de um grande *array* numérico. Ela deve dividir o *array* pela metade repetidamente até chegar ao caso-base (1 ou 2 elementos) antes de somar.
19. **O Impacto do Pivô no Quicksort:** A equipa deve implementar três variações do Quicksort usando a manipulação de índices de um *array*: uma escolhendo sempre o primeiro elemento como pivô, a segunda escolhendo o elemento do meio e a terceira escolhendo um pivô aleatório. Testem as três contra um *array* *já ordenado* de 50.000 posições. Debatam ativamente por que uma delas causará um possível travamento ($O(n^2)$) e as outras não.
20. **Algoritmo de Matchmaking (Particionamento Baseado em Habilidade):** Baseados na lógica de "particionar em torno de um pivô" do Quicksort, desenvolvam um sistema que receba um *array* de objetos de jogadores com diferentes pontuações de *ranking*. O algoritmo deve separar os jogadores em dois *array*s: uma "sala" de alto escalão e outra de baixo escalão, particionando de forma dinâmica e descartando a necessidade de ordenar perfeitamente todo o conjunto primeiro.

**Trabalhem em conjunto, testem hipóteses, quebrem o código e, acima de tudo, debatam o *porque* de uma solução ser mais eficiente que a outra. Bom trabalho!**