import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interface/product';
import { ProductDataService } from '../../service/product-data.service';

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
    private productDataService: ProductDataService
  ) {}

  ngOnInit() {
    this.getAllProductData(this.URL_PRODUCT_JSON);

    this.route?.parent?.url.subscribe((url) => {
      this.productCategory = url[0].path;
      this.filterBasedOnCategory(this.productCategory);
    });
  }

  getAllProductData(url: string) {
    this.productDataService.getAllProductData(url).subscribe((data) => {
      this.jsonResponse = data;
      this.filterBasedOnCategory(this.productCategory);
    });
  }

  filterBasedOnCategory(category: string) {
    this.showProducts = this.jsonResponse.filter(
      (product) => category === product.category
    );
    this.showProducts.reverse();
  }
}
