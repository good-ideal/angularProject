import { Component, OnInit } from "@angular/core";

import { TableService } from "../../services/tableService/table.service";

interface Table {
  id: number;
  name: String;
  age: number;
  location: string;
  date: string;
}

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  tables: Table[];
  // constructor() {
  constructor(private demoService: TableService) {
    this.demoService.getTableData().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );

    this.tables = [
      {
        id: 1,
        name: "张三",
        age: 18,
        location: "北京",
        date: "2018-01-01",
      },
      {
        id: 2,
        name: "李四",
        age: 18,
        location: "北京",
        date: "2018-01-01",
      },
      {
        id: 3,
        name: "王五",
        age: 18,
        location: "北京",
        date: "2018-01-01",
      },
    ] as Table[];
  }

  messageEvent(data): void {
    if (data.type === "delete") {
      console.log(`删除${data.row.name}`);
      this.tables = this.tables.filter((table) => table.id !== data.row.id);
    } else if (data.type === "edit") {
      console.log(`编辑${data.row.name}`);
    }
  }

  ngOnInit() {}
}
