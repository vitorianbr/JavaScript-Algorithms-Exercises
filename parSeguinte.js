function mostrarPar() { 
var numero = parseInt(document.getElementById("numero").value); //armazena o valor de um elemento como um Int, através do seu id  
var mostrarNumero = document.getElementById("mostrarNumero"); 

if (numero % 2 == 0) { 
numero = numero + 2;
} else { 
    numero++; // ++ incrementa mais 1 ao valor da variável
}

mostrarNumero.textContent = "Próximo par: " + numero + ".";

} 

var btParSeguinte = document.getElementById("btParSeguinte"); 
btParSeguinte.addEventListener("click", mostrarPar);

//1 2 0= +1
//2 4 = 2+2
// /2 = 0