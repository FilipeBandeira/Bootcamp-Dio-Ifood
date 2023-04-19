class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() { // Método
        return (this.peso / Math.pow(this.altura,2)); // Usa-se o this. para puxar o valor
    }

    classificarImc() { // Método
        const imc = this.calcularImc(); 

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
}

const jose = new Pessoa ('Jose', 80, 1.81);
console.log(jose);

console.log(jose.calcularImc().toFixed(2));
console.log(jose.classificarImc());