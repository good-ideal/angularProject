import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TableService {
  constructor(private http: HttpClient) {}

  getTableData() {
    return this.http.get("https://geoapi.qweather.com/v2/city/lookup");
  }
}
