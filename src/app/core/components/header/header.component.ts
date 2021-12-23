import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../constants/Constants';
import { Menu } from '../../interface/menu';
import { CartComponent } from '../../modal/cart/cart.component';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems: Menu[] = Constants.NavigationMenu;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openCart() {
    const dialogRef = this.dialog.open(CartComponent);
  }
}
