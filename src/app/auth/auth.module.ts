import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const AUTH = [LoginComponent, RegisterComponent];

@NgModule({
  declarations: [...AUTH],
  imports: [RouterModule, FormsModule, CommonModule],
  exports: [...AUTH]
})
export class AuthModule {}
