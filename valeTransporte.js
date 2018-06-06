function calcularVale() {
    const dinheiroAluno = Number(document.getElementById("valorVale").value);
    const mostrarNVales = document.getElementById("mostrarNVales");
    const mostrarTroco = document.getElementById("mostrarTroco");
    const precoVale = 3;

    const troco = dinheiroAluno % precoVale;
    const quantdVale = dinheiroAluno / precoVale;

    mostrarNVales.textContent = "N° de vales: " + quantdVale.toFixed(0);
    mostrarTroco.textContent = "Troco R$: " + troco.toFixed(2);
}

const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularVale);
