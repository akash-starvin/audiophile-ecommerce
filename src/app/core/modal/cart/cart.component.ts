import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/product/interface/cart';
import { Constants } from '../../constants/Constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getLocalCartItems();
    console.log(this.cartItems);
  }

  updateCount(val: number) {
    switch (val) {
      case -1:
        // if (this.productCount > 1) this.productCount--;
        break;
      case 1:
        // if (this.productCount < this.MAX_COUNT) this.productCount++;
        break;
    }
  }

  getLocalCartItems() {
    if (
      localStorage.getItem(Constants.LOCAL_STORAGE_KEY) === '[]' ||
      localStorage.getItem(Constants.LOCAL_STORAGE_KEY) === null
    ) {
      this.cartItems = [];
    } else {
      this.cartItems = JSON.parse(
        localStorage.getItem(Constants.LOCAL_STORAGE_KEY) || '{}'
      );
    }
  }
}
