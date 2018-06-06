//declarar vetores 
var selecoes = [];

function adicionarSelecao() {
    var inSelecao = document.getElementById("inSelecao");
    var outLista = document.getElementById("outLista");

    var selecao = inSelecao.value;

    if (selecao == "") {
        alert("Informe a seleção a ser adicionada");
        inSelecao.focus();
        return;
    }

    //add ao vetor 
    selecoes.push(selecao);

    outLista.textContent = selecoes.join("\n");

    inSelecao.value = "";
    inSelecao.focus();

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarSelecao);

function montarJogos() {

    var num = selecoes.length;

    if (num % 2 == 1 || num == 0) {
        alert("Informe um número par de seleções");
        return;
    }

    var lista = "";

    for (var i = 0; i < num / 2; i++) {
        lista = lista + selecoes[i] + " x " + selecoes[num-1-i] + "\n";
    } 

    document.getElementById("outLista").textContent = lista;

    
}
var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarJogos);