// Variáveis:

//1. Tipos primitivos: boolean, number, string

let ligado: boolean = false; // Tipar uma variável
let nome: string = "Filipe";
let idade: number = 30;
let altura: number = 1.81;

//2. Tipos especiais: null, undefined

let nulo: null = null;
let indefinido: undefined = undefined;

//3. Tipos abrangentes: any, void

let retorno: void // vazio
let retornoView: any = false; // Pode ser qualquer retorno

//Objeto 

// - sem previsibilidade

let produto: object = {
    name: "Felipe",
    cidade: "Natal",
    idade: 30,
};

// - com previsibilidade, objeto tipado

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
