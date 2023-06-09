//Revisão geral dos componentes do js usados no ts:

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


//Objeto:

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


//Array:

// - Com 1 tipo

let dados: string[] = ["filipe", "ana", "maria"];
let dados2: Array<string> = ["filipe", "ana", "maria"];

//  - Com mais de 2 tipos, definido em qualquer ordem

let infos: (string | number)[] = ["filipe", 31];


//Tuplas:
// Diferentemente do array multi types nas tuplas os tipos precisam ser definidas na ordem pré ordenada

let boleto: [string, number, number] = ["agua", 69.5, 37];


// Array Métodos:
// Todos os métodos do Js podem ser usadas no Ts.


//Datas:

let aniversario: Date = new Date("2023-05-13 20:00");
console.log(aniversario.toString());


//Funções:

function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(7, 4);
console.log(soma);


function addToHello(name: string) {
    return `Hello ${name}`;
}

console.log(addToHello("Felipe"));


//Funções Multi Tipos:
//Irá retornar mais de um tipo, nesse caso um number ou string, pode usar any, mas não é recomendado, fica mais previsível definir os tipos
function callToPhone(phone: number | string): number | string {
    return phone;
}

console.log(callToPhone("Filipe"));


//Funções assíncronas (Async):
//Sempre que usar uma async precisa declarar uma Promise indicando qual tipo, ou tipos serão usados
 async function getDatabase(id: number): Promise<string> {
    return "Filipe";
 }


 // Interfaces (type x interface):
 
type robot = { // Mais utilizado quando for tipar, mais parecido com um objeto
    readonly id: number | string; 
    name: string;
 };

interface robot2 { //Mais utilizado quando for usar class (mais usado)
    readonly id: number | string; // Com o readonly o usuário não poderá modificar o dado, apenas ler
    name: string;
    sayHello(): string; // um método
}

const bot: robot = {
    id: 1,
    name: "megaman",
};

const bot2: robot2 = {
    id: 1,
    name: "megaman",

    sayHello: function(): string {
        return "hello";
    },
};

console.log(bot);
console.log(bot2);


// Classe:

//Ex1
class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return "hello";
    }
}

const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());

//Ex2

// Com modificadores de acesso (data modifiers), é quem poderá acessar a sua classe, pode usar do tipo public(pode acessar fora da class), private(só dentro da class), protected (calsses e sub classes)

class character {
    private name?: string; // O ? vem como item opcional
    readonly stregth : number;
    skill: number;

    constructor (name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void { // Pode usar os modificadores nos métodos também
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new character("Ryu", 10, 98);
//p1.attack();
p1.skill = 12;

//Exemplo de subclasse:

//character: superclass (pai)
//magician: subclass (filho)

class Magician extends character {
    
    constructor(name: string, stregth: number, skill: number) {
        super(name, stregth, skill)
    }
}


//Generics:
// No generics, usamos apenas o que tipamos, com o controle
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["Felipe", "goku"], ["vegeta"]);

console.log(numArray);
console.log(stgArray);

