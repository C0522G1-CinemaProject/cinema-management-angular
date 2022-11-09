import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from "./home/home.module";
import {EmployeeModule} from "./employee/employee.module";
import {MovieModule} from "./movie/movie.module";
import {PromotionModule} from "./promotion/promotion.module";
import {RegisterModule} from "./register/register.module";
import {RoomModule} from "./room/room.module";
import {TicketModule} from "./ticket/ticket.module";
import {DecentralizationModule} from "./decentralization/decentralization.module";

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
