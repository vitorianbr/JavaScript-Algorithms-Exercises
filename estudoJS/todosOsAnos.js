function mostrarAnos() {
    var nome = document.getElementById("nome").value;
    var idade = Number(document.getElementById("idade").value);
    var anoNasc = Number(document.getElementById("anoNasc").value);
    
    var anoAtual = anoNasc + idade;

    var mostrarNome = document.getElementById("mostrarNome");
    var mostrarIdade = document.getElementById("mostrarIdade");
    var mostrarAnos = document.getElementById("mostrarAnos");
    
    var listaAnos = "";

    for (var i = anoNasc; i <= anoAtual; i++) {
        listaAnos = listaAnos + i + "\n";
    }

    mostrarNome.textContent = "Nome: " + nome;
    mostrarIdade.textContent = "Idade: " + idade;
    mostrarAnos.textContent = listaAnos;

}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("clik", mostrarAnos);