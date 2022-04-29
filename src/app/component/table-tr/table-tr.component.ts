import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table-tr",
  templateUrl: "./table-tr.component.html",
  styleUrls: ["./table-tr.component.css"],
  inputs: ["row"], //接收父组件传来的值
})
export class TableTrComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  delete(row: any): void {
    console.log(row);
  }
}
