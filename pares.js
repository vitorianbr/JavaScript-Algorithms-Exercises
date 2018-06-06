function exibirSomar() {
    //Ler um número e mostrar: pares entre 1 e o numero, n° de pares e a soma dos pares
    var numero = document.getElementById("numero").value;
    var mostrarPares = document.getElementById("mostrarPares");
    var mostrarNPares = document.getElementById("mostrarNPares");
    var mostrarSoma = document.getElementById("mostrarSoma");

    var count = 0;
    var soma = 0;
    var nums = "";
    console.log(nums);

    for (var i = 1; i <= numero; i++) {

        if (i % 2 == 0) {
            nums = nums + i + ", ";
            count++;
            soma = soma + i;
        }
    }

    mostrarPares.textContent = "Pares: " + nums;
    mostrarNPares.textContent = "N° de pares: " + count;
    mostrarSoma.textContent = "Soma dos pares: " + soma;
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirSomar);