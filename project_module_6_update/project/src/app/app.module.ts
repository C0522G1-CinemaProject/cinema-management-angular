import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DecentralizationModule} from "./component/decentralization/decentralization.module";
import {EmployeeModule} from "./component/employee/employee.module";
import {HomeModule} from "./component/home/home.module";
import {MovieModule} from "./component/movie/movie.module";
import {PromotionModule} from "./component/promotion/promotion.module";
import {RegisterModule} from "./component/register/register.module";
import {RoomModule} from "./component/room/room.module";
import {TicketModule} from "./component/ticket/ticket.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DecentralizationModule,
    EmployeeModule,
    HomeModule,
    MovieModule,
    PromotionModule,
    RegisterModule,
    RoomModule,
    TicketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
