import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { ChartsModule } from 'ng2-charts';

const MODULOS = [IncrementadorComponent, DonaComponent];

@NgModule({
  declarations: [...MODULOS, DonaComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
  exports: [...MODULOS]
})
export class ComponentsModule {}
