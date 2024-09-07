function calcularMulta() {
    const velocidadeMaxima = parseFloat(document.getElementById('velocidadeMaxima').value);
    const velocidadeVeiculo = parseFloat(document.getElementById('velocidadeVeiculo').value);
    const resultadoDiv = document.getElementById('resultado');
    const excesso = ((velocidadeVeiculo - velocidadeMaxima) / velocidadeMaxima) * 100;

   
    if (excesso <= 0) {
        resultadoDiv.innerHTML = "Você está dentro do limite de velocidade.";
        resultadoDiv.className = 'result';
    } else {
        if (excesso > 0 && excesso <= 20) {
            resultadoDiv.innerHTML = `Você excedeu até 20% a velocidade máxima. Sua multa é de R$ 130,16.`;
            resultadoDiv.className = 'result alert';
        } else {
            if (excesso > 20 && excesso <= 50) {
                resultadoDiv.innerHTML = `Você excedeu entre 20% e 50% a velocidade máxima. Sua multa é de R$ 195,23.`;
                resultadoDiv.className = 'result alert';
            } else {
                resultadoDiv.innerHTML = `Você excedeu mais de 50% a velocidade máxima. Sua multa é de R$ 880,41.`;
                resultadoDiv.className = 'result alert';
            }
        }
    }
    
}
