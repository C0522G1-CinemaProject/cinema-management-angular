import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-statement',
  templateUrl: './customer-statement.component.html',
  styleUrls: ['./customer-statement.component.css']
})
export class CustomerStatementComponent implements OnInit {

  btnView: string | undefined;
  numberMonth: number = 0;
  // timeGroup2: FormGroup

  timeGroup!: FormGroup;

  constructor(private fbuilder: FormBuilder) {
    /* this.timeGroup2 = new FormGroup({
       time: new FormControl(this.numberMonth)
     });*/
  }

  ngOnInit(): void {
    this.btnView = "Xem biểu đồ";
    this.timeGroup = this.fbuilder.group({
      time: [this.numberMonth]
    })

  }

  display() {
    if (this.btnView === "Xem biểu đồ") {
      this.btnView = "Xem bảng số liệu";
    } else {
      this.btnView = "Xem biểu đồ";
    }
  }

  find() {
    this.numberMonth = this.timeGroup.value.time;
    alert(this.numberMonth);
    console.log(this.numberMonth);
  }
}
