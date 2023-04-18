let peso = 75;
let altura = 1.81;

const imc = (peso/ Math.pow(altura, 2)); //Esta função math.pow eleva ao quadrado, ou ao expoente desejável

if (imc < 18.5) {
    console.log(`Seu IMC é de ${imc.toFixed(2)}, você está abaixo do peso`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é de ${imc.toFixed(2)}, você está com o peso normal`);
} else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC é de ${imc.toFixed(2)}, você está acima do peso`);
} else if (imc >= 30 && imc < 40) {
    console.log(`Seu IMC é de ${imc.toFixed(2)}, você esta obeso`);
} else if (imc >= 40) {
    console.log(`Seu IMC é de ${imc.toFixed(2)}, você possui obesidade morbida`);
} else {
    console.log(`Informe o seu peso e altura`);
}