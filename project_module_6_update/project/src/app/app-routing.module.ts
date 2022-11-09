import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from "./component/home/home.module";
import {EmployeeModule} from "./component/employee/employee.module";
import {MovieModule} from "./component/movie/movie.module";
import {PromotionModule} from "./component/promotion/promotion.module";
import {RegisterModule} from "./component/register/register.module";
import {RoomModule} from "./component/room/room.module";
import {TicketModule} from "./component/ticket/ticket.module";
import {DecentralizationModule} from "./component/decentralization/decentralization.module";

const routes: Routes = [
  {
    path: 'home', loadChildren: () => HomeModule,
  },
  {
    path: 'employee', loadChildren: () => EmployeeModule
  },
  {
    path: 'movie', loadChildren: () => MovieModule
  },
  {
    path: 'promotion', loadChildren: () => PromotionModule
  },
  {
    path: 'register', loadChildren: () => RegisterModule
  },
  {
    path: 'room', loadChildren: () => RoomModule
  },
  {
    path: "ticket", loadChildren: () => TicketModule
  },
  {
    path: 'login', loadChildren: () => DecentralizationModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
