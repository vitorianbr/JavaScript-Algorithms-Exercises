var produtos = [];
var precos = [];
var total = 0;

function addProdutos() {
    var produto = document.getElementById("produto");
    var preco = document.getElementById("preco");

    var valProd = produto.value;
    var valPreco = preco.value;

    var mostrarProds = document.getElementById("mostrarProds");
    var mostrarTotal = document.getElementById("mostrarTotal");

    var listaProds = '';

    if (valProd == "") {
        alert("Digite o nome do produto.");
        produto.focus();
        return;
    }

    if (valPreco == 0) {
        alert("Digite o preço do produto.");
        preco.focus();
        return;
    }

    //acrescenta novos elementos ao vetor
    produtos.push(valProd);
    precos.push(valPreco);
    total = total + parseInt(valPreco);

    for (let i = 0; i < produtos.length; i++) {
        listaProds = listaProds + (i + 1) + "° Produto: " + produtos[i] + " --- Preço R$: " + precos[i] + "\n";

    }

    mostrarProds.textContent = listaProds;
    mostrarTotal.textContent = "Total R$    " + total;

    produto.focus();
}

function removerProdutos() {
    var produto = document.getElementById("produto").value;
    var posicao = produtos.indexOf(produto); //armazena o numero que representa a posição no array em que se encontra o produto

    produtos.splice(posicao, 1); //Remove do vetor o elemento que se encontra em "posicao" em seguida definimos quantos valores serão removidos
    precos.splice(posicao, 1);

    //Atualizamos a lista de produtos:
    var mostrarProds = document.getElementById("mostrarProds");
    var mostrarTotal = document.getElementById("mostrarTotal");

    var listaProds = '';

    for (let i = 0; i < produtos.length; i++) {
        listaProds = listaProds + (i + 1) + "° Produto: " + produtos[i] + " --- Preço R$: " + precos[i] + "\n";

    }

    mostrarProds.textContent = listaProds;
    mostrarTotal.textContent = "Total R$    " + total;
}

var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", addProdutos);

var btRemover = document.getElementById("btRemover");
btRemover.addEventListener("click", removerProdutos);
