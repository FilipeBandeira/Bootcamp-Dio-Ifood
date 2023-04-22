//Classe - definição do próprio objeto

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() { 
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos, nasci no ano de ${this.anoDeNascimento}.`);
    }
}

const filipe = new Pessoa('Filipe', 31);
//filipe.nome = 'Filipe Bandeira'; // Instância é uma ocorrência do objeto
//filipe.idade = 31;

const suelda = new Pessoa('Suelda', 52);
//suelda.nome = 'Suelda Bandeira';
//suelda.idade = 52;

console.log(filipe);
console.log(suelda);

filipe.descrever();
suelda.descrever();
