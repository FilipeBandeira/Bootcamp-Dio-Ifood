const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(6);
notas.push(9);
notas.push(10);

let soma = 0; //Inicializando a variável

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);