import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants/Constants';
import { Menu } from '../../interface/menu';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems: Menu[] = Constants.NavigationMenu;
  constructor() { }

  ngOnInit(): void {
  }

}
