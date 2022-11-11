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
import {AuthGuard} from "./component/decentralization/auth.guard";

const routes: Routes = [
  {
    path: 'home', loadChildren: () => HomeModule,
    canActivate: [AuthGuard],
    data:{
      roles: ['ROLE_Employee','ROLE_Admin','ROLE_Customer','']
    }
  },
  {
    path: 'employee', loadChildren: () => EmployeeModule,
    canActivate: [AuthGuard],
    data:{
      roles: ['ROLE_Employee','ROLE_Admin']
    }
  },
  {
    path: 'movie', loadChildren: () => MovieModule,
    canActivate: [AuthGuard],
    data:{
      roles: ['ROLE_Employee','ROLE_Admin','ROLE_Customer']
    }
  },
  {
    path: 'promotion', loadChildren: () => PromotionModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'register', loadChildren: () => RegisterModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'room', loadChildren: () => RoomModule,
    canActivate: [AuthGuard]
  },
  {
    path: "ticket", loadChildren: () => TicketModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', loadChildren: () => DecentralizationModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
