import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecentralizationRoutingModule } from './decentralization-routing.module';
import {LoginComponent} from "./login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {VerifyResetPasswordComponent} from "./verify-reset-password/verify-reset-password.component";


@NgModule({
  declarations: [LoginComponent,ResetPasswordComponent, VerifyResetPasswordComponent],
  exports: [
    LoginComponent,
    ResetPasswordComponent,
    VerifyResetPasswordComponent
  ],
  imports: [
    CommonModule,
    DecentralizationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class DecentralizationModule { }
