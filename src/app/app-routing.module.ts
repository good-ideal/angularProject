import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

//定义路由
const routes: Routes = [
  { path: '**', redirectTo: 'pages' },
    { path: 'first-component',data: {title: '测试'}, component: FirstComponent },
    { path: 'second-component', data: {title: '测试1'}, component: SecondComponent ,
      children: [{
        path: 'third-component', data: {title: '测试2'}, component: SecondComponent
      }]
    }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }