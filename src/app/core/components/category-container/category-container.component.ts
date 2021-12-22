import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants/Constants';
import { Menu } from '../../interface/menu';

@Component({
  selector: 'category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
})
export class CategoryContainerComponent implements OnInit {
  categoryList: Menu[] = Constants.NavigationMenu.slice(1);

  constructor() {}

  ngOnInit(): void {}

  scrollToTop() {
    window.scroll(0, 0);
  }
}
