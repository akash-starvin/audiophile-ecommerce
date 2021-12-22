import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/core/constants/Constants';
import { Cart } from '../../interface/cart';
import { Product } from '../../interface/product';
import { ProductDataService } from '../../service/product-data.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() data: any;
  @Input() rowReverse: any;
  @Input() isDetailView: any;

  MAX_COUNT: number = 10;
  productCount: number = 1;
  cartItems: Cart[] = [];

  constructor(private productDataService: ProductDataService) {}

  ngOnInit(): void {}

  updateSelectedProduct() {
    this.productDataService.selectedProduct.next(this.data);
  }

  updateCount(val: number) {
    switch (val) {
      case -1:
        if (this.productCount > 1) this.productCount--;
        break;
      case 1:
        if (this.productCount < this.MAX_COUNT) this.productCount++;
        break;
    }
  }

  checkProductExistsInLocal() {
    //Remove if item exists in array
    this.cartItems = this.cartItems.filter((item) => {
      return item.id !== this.data.id;
    });
    let cartItemObject = this.createCartItemObject(this.data);
    this.saveToLocalStorage(cartItemObject);
  }

  saveToLocalStorage(cartItem: Cart) {
    this.cartItems.unshift(cartItem);
    localStorage.setItem(
      Constants.LOCAL_STORAGE_KEY,
      JSON.stringify(this.cartItems)
    );
  }

  createCartItemObject(product: Product): Cart {
    return {
      id: product.id,
      image: product.image.mobile,
      name: product.name,
      price: product.price,
      quantity: this.productCount,
    };
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
    this.checkProductExistsInLocal();
  }
}
