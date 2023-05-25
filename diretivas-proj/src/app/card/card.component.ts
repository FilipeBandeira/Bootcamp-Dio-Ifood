import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos: string[] = []
  menuType: string = "superuser"

  constructor() { //Criando uma lista dinamicamente
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.produtos.push("Filipe")
  }

  remover(index: number) {
    this.produtos.splice(index, 1)
  }

}
