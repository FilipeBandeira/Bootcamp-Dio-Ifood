//Obejto

const pessoa = {
    nome: 'Filipe Bandeira',
    idade: 31,

    descrever: function () { //Quando usamos uma função dentro de um objeto temos um método, e esta função pode usar os objetos descritos.
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};

pessoa.descrever();
