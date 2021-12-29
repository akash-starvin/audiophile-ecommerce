import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/product/interface/cart';
import { Product } from 'src/app/product/interface/product';
import { Constants } from '../../constants/Constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  totalCost: number = 0;
  cartItemsCount: number = 0;

  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.getLocalCartItems();
    this.calculateTotalCostAndCartItems();
  }

  updateCount(val: number, id: number) {
    let objIndex = this.cartItems.findIndex((obj) => obj.id == id);
    switch (val) {
      case -1:
        if (this.cartItems[objIndex].quantity === 1) {
          this.removeCartItem(objIndex);
          this.saveToLocal(this.cartItems);
        } else {
          this.cartItems[objIndex].quantity--;
          this.saveToLocal(this.cartItems);
        }
        this.calculateTotalCostAndCartItems();
        break;
      case 1:
        if (this.cartItems[objIndex].quantity < 10) {
          this.cartItems[objIndex].quantity++;
          this.saveToLocal(this.cartItems);
          this.calculateTotalCostAndCartItems();
        } else {
          this.toastrService.error('You have reached maximum limit!');
        }
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

  removeCartItem(index: number) {
    this.toastrService.error('Product removed!');
    this.cartItems.splice(index, 1);
  }

  removeAllCartItems() {
    this.cartItems = [];
    this.toastrService.error('Cart is empty!');
    this.calculateTotalCostAndCartItems();
    this.saveToLocal(this.cartItems);
  }

  saveToLocal(object: Cart[]) {
    localStorage.setItem(Constants.LOCAL_STORAGE_KEY, JSON.stringify(object));
  }

  calculateTotalCostAndCartItems() {
    this.cartItemsCount = 0;
    this.totalCost = 0;
    this.cartItems.forEach((element) => {
      this.totalCost = element.price * element.quantity;
      this.cartItemsCount += element.quantity;
    });
  }
}
