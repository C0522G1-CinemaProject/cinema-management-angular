import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControlDirective, FormControl, FormGroup} from "@angular/forms";
import {Chart} from "chart.js";
import {IMovieStatementDto} from "../../../dto/i-movie-statement-dto";
// @ts-ignore
import {BehaviorSubject, Observable} from "rxjs/dist/types";
import {StatementService} from "../statement.service";

@Component({
  selector: 'app-movie-statement',
  templateUrl: './movie-statement.component.html',
  styleUrls: ['./movie-statement.component.css']
})
export class MovieStatementComponent implements OnInit {

  btnView: string | undefined;
  numberMonth: number = 0;
  labelCharts: string[] = [];
  dataCharts: number[] = [];
  listMovieTop$: Observable<Array<IMovieStatementDto>>;
  timeGroup!: FormGroup;
  chart: any;

  constructor(private fbuilder: FormBuilder,
              private statement: StatementService) {
    /* this.timeGroup2 = new FormGroup({
       time: new FormControl(this.numberMonth)
     });*/
  }

  ngOnInit(): void {
    this.btnView = "Xem biểu đồ";
    this.timeGroup = this.fbuilder.group({
      time: [this.numberMonth]
    })
    this.getList(this.numberMonth);
  }

  display() {
    if (this.btnView === "Xem biểu đồ") {
      this.btnView = "Xem bảng số liệu";
    } else {
      this.btnView = "Xem biểu đồ";
    }
  }

  getList(numberMonth: number) {
    this.statement.listMovieTop(this.numberMonth).subscribe((value: Array<IMovieStatementDto>) => {
      this.listMovieTop$ = new BehaviorSubject<Array<IMovieStatementDto>>(value);
      this.creatLabel(value);
    })
  }

  find() {
    this.numberMonth = this.timeGroup.value.time;
    this.getList(this.numberMonth);
  }

  creatLabel(value: Array<IMovieStatementDto>) {
    this.labelCharts = [];
    this.dataCharts = [];

    // @ts-ignore
    for (let item: IMovieStatementDto of value) {
      if (item.name != null) {
        this.labelCharts.push(item.name);
      } else {
        this.labelCharts.push(' ');
      }

      if (item.turnover != null) {
        this.dataCharts.push(item.turnover);
      } else {
        this.dataCharts.push(0);

      }
    }
  }

  creatTable() {

  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['05/10/2022', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        indexAxis: 'x',
        aspectRatio: 2.5
      }

    });
  }
}
