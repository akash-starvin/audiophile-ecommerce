import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/core/constants/Constants';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Cart } from '../../interface/cart';
import { Product } from '../../interface/product';
import { ProductDataService } from '../../service/product-data.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  data!: Product;
  @Input() rowReverse: boolean | undefined;
  @Input() isDetailView: boolean | undefined;

  MAX_COUNT: number = 10;
  productCount: number = 1;
  cartItems: Cart[] = [];

  constructor(
    private productDataService: ProductDataService,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}
  updateSelectedProduct() {
    this.productDataService.selectedProduct.next(this.data);
  }

  updateCount(val: number) {
    switch (val) {
      case -1:
        if (this.productCount > 1) this.productCount--;
        else
          this.toastrService.error('Minimum 1 item!', '', {
            positionClass: Constants.TOAST_POSITION,
          });
        break;
      case 1:
        if (this.productCount < this.MAX_COUNT) this.productCount++;
        else
          this.toastrService.error('Maximum 10 items allowed!', '', {
            positionClass: Constants.TOAST_POSITION,
          });
        break;
    }
  }

  checkProductExists() {
    //Remove if item exists in array
    this.cartItems = this.cartItems.filter((item) => {
      return item.id !== this.data.id;
    });
    let cartItemObject = this.createCartItemObject(this.data);
    this.saveToLocalStorage(cartItemObject);
  }

  saveToLocalStorage(cartItem: Cart) {
    this.cartItems.unshift(cartItem);
    this.localStorageService.saveObject(
      this.cartItems,
      Constants.LOCAL_STORAGE_CART
    );
    this.toastrService.success('Added to cart!', '', {
      positionClass: Constants.TOAST_POSITION,
    });
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
    this.cartItems = this.localStorageService.getSavedObject(
      Constants.LOCAL_STORAGE_CART
    );
    this.checkProductExists();
  }
}
