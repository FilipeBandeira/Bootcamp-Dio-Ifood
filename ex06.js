function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return (`Seu IMC é de ${imc.toFixed(2)}, você está abaixo do peso`);
    } else if (imc >= 18.5 && imc < 25) {
        return (`Seu IMC é de ${imc.toFixed(2)}, você está com o peso normal`);
    } else if (imc >= 25 && imc < 30) {
        return (`Seu IMC é de ${imc.toFixed(2)}, você está acima do peso`);
    } else if (imc >= 30 && imc < 40) {
        return (`Seu IMC é de ${imc.toFixed(2)}, você esta obeso`);
    } else if (imc >= 40) {
        return (`Seu IMC é de ${imc.toFixed(2)}, você possui obesidade morbida`);
    } else {
        return (`Informe o seu peso e altura`);
    }
}

/*function main() {

    const imc = calcularImc(75, 1.81);
    console.log(classificarImc(imc));
}
main();*/

(function () { //Função não nomeada, em grau de precedência que vai ser executada uma vez, mesmo coisa que o main - Forma mais organizada e otimizada para construir o código
    const imc = calcularImc(75, 1.81);
    console.log(classificarImc(imc));
})();



