function conversor() { 
    var inFilme = document.getElementById("inFilme"); 
    var inDuracao = document.getElementById("inDuracao");
    
    var convertHoras = inDuracao.value / 60; 
    
    
} 

var conversorBtn = document.getElementById("btConverter"); 
conversorBtn.addEventListener("click", conversor);