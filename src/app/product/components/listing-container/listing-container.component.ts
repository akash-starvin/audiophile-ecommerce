import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/core/constants/Constants';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'product-listing-container',
  templateUrl: './listing-container.component.html',
  styleUrls: ['./listing-container.component.scss'],
})
export class ListingContainerComponent implements OnInit {
  URL_PRODUCT_JSON: string = '../../../../assets/json/products.json';
  productCategory: string = '';
  jsonResponse: Product[] = [];
  showProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.getAllProductData(Constants.LOCAL_STORAGE_PRODUCTS_LIST);

    this.route?.parent?.url.subscribe((url) => {
      this.productCategory = url[0].path;
      this.filterBasedOnCategory(this.productCategory);
    });
  }

  getAllProductData(path: string) {
    this.jsonResponse = this.localStorageService.getSavedObject(path);
    this.filterBasedOnCategory(this.productCategory);
  }

  filterBasedOnCategory(category: string) {
    this.showProducts = this.jsonResponse.filter(
      (product) => category === product.category
    );
    this.showProducts.reverse();
  }
}
