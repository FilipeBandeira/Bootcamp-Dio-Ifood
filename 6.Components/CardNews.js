class Cardnews extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles());
    }
  
    build() {
      const componentRoot = document.createElement("div");
      componentRoot.setAttribute("class", "card");
  
      const cardLeft = document.createElement("div");
      cardLeft.setAttribute("class", "card__left");
      componentRoot.appendChild(cardLeft);
  
      const autor = document.createElement("span");
      autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
      cardLeft.appendChild(autor);
  
      const linkTitle = document.createElement("a");
      linkTitle.textContent = this.getAttribute("title");
      linkTitle.href = this.getAttribute("link-url");
      cardLeft.appendChild(linkTitle);
  
      const newsContent = document.createElement("p");
      newsContent.textContent = this.getAttribute("contet");
      cardLeft.appendChild(newsContent);
  
      const cardRight = document.createElement("div");
      cardRight.setAttribute("class", "card__right");
      componentRoot.appendChild(cardRight);
  
      const newsImage = document.createElement("img");
      newsImage.src = this.getAttribute("photo") || "foto-default.jpg";
      newsImage.alt = "Foto da Noticia";
      cardRight.appendChild(newsImage);

      return componentRoot;
    }
  
    styles() {
      const style = document.createElement("style");
      style.textContent = `
          .card {
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          
          .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
          }
          
          .card__left > span {
            font-weight: 400px;
          }
          
          .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
          }
          
          .card__left > p {
            color: rgb(70, 70, 70);
          }
      `;
  
      return style;
    }
  }
  
  customElements.define("card-news", Cardnews);