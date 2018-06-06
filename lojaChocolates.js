function calcularValor() {

        const precoTrufa = document.getElementById("precoTrufa").value;
        const quantdTrufas = document.getElementById("quantidadeTrufas").value;
        const mostrarMensagem = document.getElementById("mostrarMensagem");
        const pagar = document.getElementById("pagar");
        let brinde;
    
        const valorPagar = precoTrufa * quantdTrufas;
      
        if (quantdTrufas >= 10) {
            brinde = quantdTrufas / 10;
            pagar.textContent = "A Pagar R$: " + valorPagar.toFixed(2);
            mostrarMensagem.textContent = "Brinde: " + brinde + " trufa(s).";
        } else {
            pagar.textContent = "A Pagar R$: " + valorPagar.toFixed(2);
        }
}

const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);