class TituloDinamico extends HTMLElement { // Criando uma árvore fantasma
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});

        //base component (Aqui criamos um h1 => <h1>Filipe</h1>)

        const componentRoot = document.createElement("h1");
            componentRoot.textContent = this.getAttribute("titulo"); //Atributo dinâmico, esse titulo equivale a um src em um img, alterando assim só o necessário

        //estilizar o component

        const style = document.createElement("style");
            style.textContent = `
                h1{
                    color: red;
                }
            `

        //enviar para o shadow

        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);