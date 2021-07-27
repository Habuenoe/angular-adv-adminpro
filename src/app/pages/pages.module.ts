import { NgModule } from '@angular/core';

// MODULES
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

// COMPONENTS
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';

const PAGES = [DashboardComponent, ProgressComponent, Grafica1Component, PagesComponent];
const MODULES = [SharedModule, ComponentsModule];

@NgModule({
  declarations: [...PAGES],
  imports: [...MODULES, ComponentsModule, CommonModule, FormsModule, AppRoutingModule],
  exports: [...PAGES, ...MODULES]
})
export class PagesModule {}
