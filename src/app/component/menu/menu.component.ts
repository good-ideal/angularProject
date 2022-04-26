import { Component, OnInit } from '@angular/core';



interface Menu{
  name: String,
  path: String
}

const MENU :Menu[] = [{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
},{
  name: "页面1",
  path: "first-component"
},{
  name: "页面2",
  path: "second-component"
}]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus : Menu[];
  
  constructor() { 
    this.menus = MENU;
  }

  ngOnInit() {
      
  }

}
