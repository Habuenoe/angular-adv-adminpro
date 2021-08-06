import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input('valor') progreso: number = 50;

  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.btnClass = 'btn' + ' ' + this.btnClass;
  }

  cambiarValor(valor: number) {
    console.log(valor);
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return (this.progreso = 100);
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);

      return (this.progreso = 0);
    }
    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }

  cambioValorInput() {
    console.log('cambiooo');
    if (this.progreso > 100) {
      this.progreso = 100;
    }

    if (this.progreso < 0) {
      this.progreso = 0;
    }
    console.log('PROGRESO', this.progreso);
    this.valorSalida.emit(this.progreso);
  }
}
