document.addEventListener('DOMContentLoaded', (event) => {
    let inputDistancia = document.getElementById("distancia");
    let inputAutonomia = document.getElementById("autonomia");
    let inputPedagio = document.getElementById("pedagio");
    let inputPrecoAlcool = document.getElementById("precoalcool")
    let divResultado = document.getElementById("saida");
    let botaoCalcular = document.getElementById("calcular");

    // Atribuição da função ao evento de clique do botão
    botaoCalcular.onclick = calcularCusto;

    function calcularCusto() {
        // Entrada
        let distancia = Number(inputDistancia.value);
        let autonomia = Number(inputAutonomia.value);
        let pedagio = Number(inputPedagio.value);
        let precoAlcool = Number(inputPrecoAlcool.value);

        // Processamento
        let custoCombustivel = (distancia / autonomia) * precoAlcool;
        let custoTotal = custoCombustivel + pedagio;

        // Saída
        divResultado.innerText = 'O custo total da viagem é R$ ' + custoTotal.toFixed(2);
    }
});
