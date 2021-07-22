import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

const SHARED = [BreadcrumbsComponent, SidebarComponent, HeaderComponent];

@NgModule({
  declarations: [...SHARED],
  imports: [CommonModule],
  exports: [...SHARED]
})
export class SharedModule {}
