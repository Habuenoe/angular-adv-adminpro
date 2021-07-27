import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth-routing.module';

// Componentes
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  // path: '/dashboard' PagesRoutingModule
  // path: '/auth'  AuthRoutingModule
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), PagesRoutingModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
