function montarArvore() {
    var numero = document.getElementById("numero").value;

    var mostrar = document.getElementById("mostrar");

    var asterisco = "";

    for (var i = 1; i <= numero; i++) {
        
        for (var j = 0; j < i; j++) {
            asterisco = asterisco + "*";
        } 
        asterisco = asterisco + "\n";
    }
    
    mostrar.textContent = asterisco;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", montarArvore);