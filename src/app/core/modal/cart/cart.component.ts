import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/product/interface/cart';
import { Constants } from '../../constants/Constants';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  totalCost: number = 0;
  cartItemsCount: number = 0;

  constructor(
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService
  ) {}

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
    this.cartItems = this.localStorageService.getSavedObject(
      Constants.LOCAL_STORAGE_CART
    );
  }

  removeCartItem(index: number) {
    this.toastrService.error('Product removed!');
    this.cartItems.splice(index, 1);
  }

  removeAllCartItems() {
    this.cartItems = [];
    this.toastrService.error('Cart is empty!');
    this.calculateTotalCostAndCartItems();
    this.localStorageService.deleteObject(Constants.LOCAL_STORAGE_CART);
  }

  saveToLocal(object: Cart[]) {
    this.localStorageService.saveObject(object, Constants.LOCAL_STORAGE_CART);
  }

  calculateTotalCostAndCartItems() {
    this.cartItemsCount = 0;
    this.totalCost = 0;
    this.cartItems.forEach((element) => {
      this.totalCost += element.price * element.quantity;
      this.cartItemsCount += element.quantity;
    });
  }
}
