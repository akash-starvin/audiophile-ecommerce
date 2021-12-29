import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MockDataService } from 'src/app/core/services/mock-data.service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Constants } from 'src/app/core/constants/Constants';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productData: any;
  productKey: string = '';

  constructor(
    private mockDataService: MockDataService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getSelectedProductData();
  }

  goToPreviousPage() {
    this.location.back();
  }

  getSelectedProductData() {
    this.mockDataService.selectedProduct.subscribe((result) => {
      if (Object.keys(result).length !== 0) {
        this.productData = result;
      } else {
        this.getRouteProductKey();
      }
    });
  }

  getRouteProductKey() {
    this.activatedRoute?.url.subscribe(() => {
      this.productKey = this.activatedRoute?.snapshot?.params.product_id;
      this.productData = this.getProductBasedOnKey(this.productKey);
    });
  }
  getProductBasedOnKey(key: string): any {
    return this.localStorageService.getSpecificData(
      Constants.LOCAL_STORAGE_PRODUCTS_LIST,
      key
    );
  }
}
