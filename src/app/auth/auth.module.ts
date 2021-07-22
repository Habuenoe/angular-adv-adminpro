import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const AUTH = [LoginComponent, RegisterComponent];

@NgModule({
  declarations: [...AUTH],
  imports: [CommonModule],
  exports: [...AUTH]
})
export class AuthModule {}
