function verificar(precoAlcool, precoGasolina) {
    if (precoAlcool < 0.7 * precoGasolina) {
        return true;
    } else {
        return false;
    }
}


let pAlcool = 4.00; 
let pGasolina = 6.00;

if (verificar(pAlcool, pGasolina)) {
    console.log("Compensa usar álcool.");
} else {
    console.log("Não compensa usar álcool.");
}
