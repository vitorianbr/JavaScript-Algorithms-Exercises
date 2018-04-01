function mostrar() { 
var numero = document.getElementById("numero"); 
var mensagem = document.getElementById("mensagem"); 

console.log(numero.value);
console.log(numero.value % 2);
if (numero.value % 2 == 0) { 
    mensagem.textContent = "PAR."; 
} 
else { 
    mensagem.textContent = "ÍMPAR.";
}; 
}

var btMostrar = document.getElementById("btMostrar"); 
btMostrar.addEventListener("click", mostrar);