import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {PromotionService} from "../../service/promotion.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.component.html',
  styleUrls: ['./promotion-edit.component.css']
})
export class PromotionEditComponent implements OnInit {
  promotionFormGroup: FormGroup;
  promotionId: number;

  constructor(private promotionService: PromotionService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }
  this.promotionId = Number(this.activatedRoute.snapshot.params.id);


}
