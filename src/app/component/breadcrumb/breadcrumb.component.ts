import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter, map} from 'rxjs/operators';

interface Breadcrumb{
  name: string;
  path: string;
}

const Breadcrumbs: Breadcrumb[] = [{
  name: '首页',
  path: '/'
},{
  name: '用户',
  path: '/'
},{
  name: '基本信息',
  path: '/'
}]

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  current: Breadcrumb;

  breadcrumbs: Breadcrumb[];
  

  // constructor() { 
  //   this.breadcrumbs = Breadcrumbs;
  // }
  constructor(
    private router: Router
  ) {
    this.breadcrumbs = Breadcrumbs;

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd),map(() => this.router) )
    .subscribe((event) => {
      console.log(event);
      this.current = {
        name: "123",
        path: event.url,
      } as Breadcrumb
      // 更改页面title
      this.setBreadcrumbs(this.current)
    });
  }

  ngOnInit() {

  }
  //添加到breadcrumbs
  setBreadcrumbs(breadcrumb1: Breadcrumb){
    this.breadcrumbs = this.breadcrumbs.filter(breadcrumb => breadcrumb.path != breadcrumb1.path)
    this.breadcrumbs.push(breadcrumb1);
  }

  //检查数组里面是否只有一个元素
  checkOne(){
    return this.breadcrumbs.length === 1;
  }
  
  //判断数组里面是否是最后一个元素
  checkLast(breadcrumb: Breadcrumb){
    return this.breadcrumbs.reverse()[0] === breadcrumb;
  }
}
