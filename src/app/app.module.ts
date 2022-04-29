import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  NgbPaginationModule,
  NgbAlertModule,
} from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MenuComponent } from "./component/menu/menu.component";
import { HeaderComponent } from "./component/header/header.component";
import { ContentComponent } from "./component/content/content.component";
import { FooterComponent } from "./component/footer/footer.component";
import { BreadcrumbComponent } from "./component/breadcrumb/breadcrumb.component";
import { TableComponent } from "./pages/table/table.component";
import { TableTrComponent } from "./component/table-tr/table-tr.component";
import { TableService } from "./services/tableService/table.service";

import { HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./auth/AuthInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    BreadcrumbComponent,
    TableComponent,
    TableTrComponent,
  ],
  imports: [
    BrowserModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TableService, AuthInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
