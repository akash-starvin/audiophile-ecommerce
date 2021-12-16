import { Component, OnInit } from '@angular/core';
import { Route } from '../../interface/route';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems: Route[] = [
    {
      route: '/',
      name: 'home'
    },{
      route: '/headphones',
      name: 'headphones'
    },{
      route: '/speakers',
      name: 'speakers'
    },{
      route: '/earphones',
      name: 'earphones'
    }
  ];

  selectedNav: Route = this.navItems[0];

  constructor() { }

  ngOnInit(): void {
  }

}
