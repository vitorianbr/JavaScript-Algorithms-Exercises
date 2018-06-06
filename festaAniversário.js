function adicionar() {
    //Console.log(mostrar);
    var nome = document.getElementById("nome").value;
    var numPessoas = document.getElementById("numPessoas").value;

    var mostrar = document.getElementById("mostrar");
    var mostrarTotal = document.getElementById("mostrarTotal");

    var mensagem = mostrar.textContent;
    mensagem = mensagem + nome + " - " + numPessoas + " pessoas \n";

    

}

var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionar);