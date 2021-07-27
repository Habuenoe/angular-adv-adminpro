import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent {
  @Input('valor') progreso: number = 50;

  constructor() {}

  cambiarValor(valor: number) {
    console.log(valor);
    if (this.progreso >= 100 && valor >= 0) {
      return (this.progreso = 100);
    }

    if (this.progreso <= 0 && valor < 0) {
      return (this.progreso = 0);
    }
    this.progreso += valor;
  }
}
