import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { PromotionCreateComponent } from './promotion-create/promotion-create.component';
import { PromotionEditComponent } from './promotion-edit/promotion-edit.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PromotionListComponent,
    PromotionCreateComponent,
    PromotionEditComponent
  ],
  exports: [
    PromotionCreateComponent,
    PromotionEditComponent
  ],
    imports: [
        CommonModule,
        PromotionRoutingModule,
        ReactiveFormsModule
    ]
})
export class PromotionModule { }
