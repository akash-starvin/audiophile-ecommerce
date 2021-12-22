import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants/Constants';
import { Menu } from '../../interface/menu';

@Component({
  selector: 'home-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  navItems: Menu[] = Constants.NavigationMenu;
  socialMenu: Menu[] = Constants.socialMediaIcons;
  constructor() {}

  ngOnInit(): void {}
}
