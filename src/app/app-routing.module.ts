import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { TableComponent } from "./pages/table/table.component";

//定义路由
const routes: Routes = [
  {
    path: "table-component",
    data: { title: "表格管理" },
    component: TableComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
