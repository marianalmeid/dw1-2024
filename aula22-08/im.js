//captura ods elementos do html
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")
let botaoCalcular = document.getElementById("calcular")

botaoCalcular.onclick = CalcularImc

function CalcularImc(){
    
    //entrada
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    //processamento
    let imc = peso / (altura * altura)

    //saida
    divSaida.innerText = imc
}
