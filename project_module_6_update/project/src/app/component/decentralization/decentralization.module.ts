import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecentralizationRoutingModule } from './decentralization-routing.module';
import {LoginComponent} from "./login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [LoginComponent],
  exports: [
    LoginComponent
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
