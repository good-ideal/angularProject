import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-table-tr",
  templateUrl: "./table-tr.component.html",
  styleUrls: ["./table-tr.component.css"],
  inputs: ["row"], //接收父组件传来的值
})
export class TableTrComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  delete(row: any): void {
    this.messageEvent.emit({
      type: "delete",
      row,
    });
  }

  edit(row: any): void {
    this.messageEvent.emit({
      type: "edit",
      row,
    });
  }
}
