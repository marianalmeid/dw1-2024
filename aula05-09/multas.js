document.addEventListener('DOMContentLoaded', (event) => {

    let inputCapacidade = document.getElementById("capacidade");
    let inputVelocidade = document.getElementById("velocidade");
    let divSaida = document.getElementById("saida")
    let botaoCalcular = document.getElementById("calcular");

    botaoCalcular.onclick = calcularMulta;

    function calcularMulta() {
        let porcent = parseFloat((velocidade*1)/capacidade);
        let sobra = Math.floor(porcent-1);

        if (sobra <= 0.2){
            divSaida.innerText = `valor da multa {130,16}`;
        }else{
            if (sobra > 0.2 | sobra <= 0.5){
                divSaida.innerText = `valor da multa {195,23}`;
            }else{
                divSaida.innerText = `valor da multa {800,23}`;
            }
        }
});