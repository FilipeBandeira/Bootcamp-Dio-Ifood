class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) { //Função contrutor, passagens obrigatórias
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) { //Método
        return (distanciaEmKm * this.gastoMedioPorKm * precoCombustivel);
    }
}

const uno = new Carro('Fiat', 'Azul', 1/12);
console.log(uno);

console.log(uno.calcularGastoDePercurso(70,5))
