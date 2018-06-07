// HTML = HYPER TEXT MARKUP LANGUAGE <- Mostrar para o Browser(navegador) os elementos visíveis;
// CSS = CASCADING STYLE SHEET <- Estiliza os elementos da página;
// JavaScript = EcmaScript <- Responsável pelas funcionalidades e interações de um site.

function nomeDaFunction() { //Função É um bloco de código para uma atividade específica;
    /*    
    Variáveis armazenam um valor em um espaço de memória(RAM) (2bts  1BTS = 14koreanos, 0.1 koreano = 1024 Ocidentais);
    O escopo da variável pode ser Global (Inserida no escopo do arquivo, podendo ser acessadas por qualquer function) ou Local,
    podendo ser acessada somente dentro do escopo em que é declarada(dentro do corpo da função);

    - Por padrão, evita-se usar variáveis globais. Por poderem ser acessadas de qualquer lugar do código, podem causar conflitos com outras
    variáveis, arquivos ou bibliotecas.

    - JavaScript é case sensitive, ou seja, 2 variáveis com o mesmo nome mas com diferenças nos caracteres podem as definir como
        diferentes variáveis:   var nome = "nome"; var Nome = "outroNome";

        ESTRUTURA DE UMA VARIÁVEL:

        tipo nomeDaVariável = valor_atribuído;
        tipo: var, let, const;
        = : o Sinal de igual é de ATRIBUIÇÃO, ou seja, atribui a variável um valor;
        valor da variável: Em JavaScript, pode ser atribuído a uma variável: valores inteiros, caracteres, valores com ponto flutuante, objetos e
        funções.

    ___________________________________________________________________________________________
    
    TIPOS DE VARIÁVEIS
    var -> Eleva a variável até o topo do contexto em que está inserido, isto se chama Hoisting:
        mensagem = "texto";
        var mensagem;

        __________________________________________________________________________________________
    
    let -> Atribui escopo de bloco a variável, então não ocorre hoisting, ela precisa ser criada antes de ser usada e se limita
    ao contexto no qual está inserido:
    
    if (condicao){
        let mensagem; //A variável só existe no contexto em que está. Ela vai ser descartada no final da condição.
    }
    if (outraCondicao) {
        let mensagem;
    }
    
    mensagem = "texto"; //A variável mensagem não existiria pois está fora do contexto ao qual foi declarada.
    __________________________________________________________________________________________
    
    const -> Atribui escopo de bloco a variável. Após atribuir um valor a variável, ele não pode ser mais alterado, sendo uma constante.
    É preciso atribuir seu valor na declaração da variável:
    
    const pi = 3.1415;
    pi = 3.14; //O valor não seria atribuido, pois já foi definido na declaração da variável.
    
    const dinheiroAluno = document.getElementById("valor");  <- O elemento HTML atribuído a variável sempre será o mesmo, 
    mas o valor inserido no HTML pode ser diferente;
    
    const precoVale = 3;
    ___________________________________________________________________________________________

    CONVERTENDO VARIÁVEIS
    Number() -> Converte para um valor númerico;
    parseInt() -> Converte um valor para inteiro;
    parseFloat() -> Converte um valor para número com ponto flutuante de precisão simples.

        const num = 1; <- Identifica naturalmente o tipo da variável como inteiro;
        Em um caso em que o tipo do input seja "text", o valor do elemento será sempre String, neste caso, é necessário converterte-lo:
        <input type="text" id="numero"> <- HTML
        const numero = Number(document.getElementById("numero").value); Converte para numérico o valor (.value) do elemento "numero"
        ___________________________________________________________________________________________

    Objeto:
    É um conjunto de atributos e funcionalidades(chamadas métodos) que tem alguma relação e que caracterizam alguma coisa.

    DOM - DOCUMENT OBJECT MODEL - Fornece uma representação estruturada (como uma árvore) do documento. o DOM é o que fornece
    acesso a todos os atributos, métodos e elementos de um documento(HTML, XML e SVG) que podem ser acessados através do JavaScript pela
    palavra-chave "document", assim, podendo utilizar seus métodos, como por exemplo, o getElementById();

    objeto pessoa:
    atributos:
        pele, cabelo, orelhas;
    Funções: (o que ela pode fazer)
        caminhar, sentar, correr, cozinhar;

    

    */
}
//Exemplo de Objeto:
const pessoa = {

    nome: "Vitotinha dos Codão",
    orelhas: 2,
    nascimento: 1997,
    signo: "Touro",

    caminhar: function () {
        //...
    },
    correr: function () {
        //...
    },
    cozinhar: function () {
        //...
    }


}

function mostrarProdutos(valor) { // ()Parametro: Define o valor externo a ser recebido, o nome é apenas referencia. A function só irá funionar
    const preco = valor;      // se um valor for passado para o parametro definido.

}

function valores() {
    const valor = 50.75;
    mostrarProdutos(valor); //Passamos a variável valor como ARGUMENTO para a function mostrarProdutos.
}
