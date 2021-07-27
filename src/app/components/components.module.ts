import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';

const MODULOS = [IncrementadorComponent];

@NgModule({
  declarations: [...MODULOS],
  imports: [CommonModule, FormsModule],
  exports: [...MODULOS]
})
export class ComponentsModule {}
