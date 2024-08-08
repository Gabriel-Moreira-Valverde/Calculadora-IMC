function calcular(){

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").innerText = 'Por favor, insira valores válidos.';
        return;
    }

    let quadrado = altura * altura;
    let imc = peso / quadrado;
    
    let classificacao;
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

    document.getElementById("resultado").innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;   
}