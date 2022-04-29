import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';
import {filter, map} from 'rxjs/operators';

interface Breadcrumb{
  name: string;
  path: string;
}

const Breadcrumbs: Breadcrumb[] = [{
  name: '首页',
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

  constructor(
    private router: Router,
  ) {
    this.breadcrumbs = Array.from(Breadcrumbs);
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd), map(() => this.router))
    .subscribe((event) => {
      const parents = this.getTitle(this.router.routerState, this.router.routerState.root);
      const lastElement = parents[parents.length - 1];
      // console.log(this.router.routerState, this.router.routerState.root)
      if (lastElement) {
        this.current = lastElement as Breadcrumb
        // 设置当前所有父亲节点到数组
        this.setBreadcrumbs(this.current, parents);
      }
    });
  }
  getTitle(state, parent): any {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
        data.push({
          name: parent.snapshot.data.title,
          path: parent.routeConfig && `/${parent.routeConfig.path}`
        });
    }

    if (state && parent) {
        data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
}
  ngOnInit() {
    
  }
  //添加到breadcrumbs
  setBreadcrumbs(breadcrumb1: Breadcrumb, parents: any): void{
    //创建一个倒序循环
    for (let i = parents.length - 1; i >= 0; i--) {
      const parent = parents[i];
      parent.path = this.getPath(parents, i);
    }
    this.breadcrumbs = Array.from(Breadcrumbs);
    this.breadcrumbs.push(...parents);

  }

  getPath(parents: any, index: number): string {
    let path: string = "";
    for (let i = 0; i <= index; i++) {
      const parent = parents[i];
      path += parent.path;
    }
    return path; 
  }

  //递归获取parent里面的path和title
  getParent(parent: any): void{
    if (parent && parent.snapshot.routeConfig && parent.snapshot.routeConfig.path) {
      this.breadcrumbs.push({
        path: parent.snapshot.routeConfig.path,
        name: parent.snapshot.data.title
      } as Breadcrumb);
    }
  }

  //检查数组里面是否只有一个元素
  checkOne() :boolean{
    return this.breadcrumbs.length === 1;
  }
  
  //判断数组里面是否是最后一个元素
  checkLast(index: number): boolean{
    return index === this.breadcrumbs.length - 1;
  }
}
