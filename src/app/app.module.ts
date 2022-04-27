import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './component/menu/menu.component';
import { HeaderComponent } from './component/header/header.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component'; 


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MenuComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    BreadcrumbComponent,
    
  ],
  imports: [
    BrowserModule,NgbPaginationModule,NgbAlertModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
