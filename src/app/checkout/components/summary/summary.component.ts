import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/core/constants/Constants';
import { Cart } from 'src/app/product/interface/cart';

@Component({
  selector: 'checkout-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  shippingCost: number = 50;
  cartItems: Cart[] = [];
  totalCost: number = 0;
  vatAmount: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.getLocalCartItems();
    this.calculateTotalCost();
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

  clearStorage() {
    localStorage.setItem(Constants.LOCAL_STORAGE_KEY, JSON.stringify(''));
  }

  calculateTotalCost() {
    this.totalCost = 0;
    this.cartItems.forEach((element) => {
      this.totalCost += element.price * element.quantity;
    });
    this.vatAmount = this.calculateVat(this.totalCost);
  }

  calculateVat(amount: number) {
    return amount * 0.2;
  }
}