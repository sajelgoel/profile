import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginRoutingModule } from './login-routing.module';
import { SignInComponent } from './components/login-parent/sign-in/sign-in.component';
import { SignUpComponent } from './components/login-parent/sign-up/sign-up.component';
import { LoginParentComponent } from './components/login-parent/login-parent.component';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, LoginParentComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
