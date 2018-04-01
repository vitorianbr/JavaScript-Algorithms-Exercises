function converterHoras() {
    var horasBrasil = document.getElementById("horasBrasil"); 
    var mostrarConversao = document.getElementById("mostrarConversao");
    var horasFranca = parseInt(horasBrasil.value) + 5; 

    console.log(horasFranca);

        if (horasFranca > 24) {
        horasFranca = horasFranca % 24;
    };
    
    mostrarConversao.textContent = "Horário atual na França é: " + horasFranca;
}
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", converterHoras);