import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from 'src/app/core/services/mock-data.service';
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
    private mockDataService: MockDataService
  ) {}

  ngOnInit() {
    this.getAllProductData(this.URL_PRODUCT_JSON);

    this.route?.parent?.url.subscribe((url) => {
      this.productCategory = url[0].path;
      this.filterBasedOnCategory(this.productCategory);
    });
  }

  getAllProductData(url: string) {
<<<<<<< HEAD
    this.mockDataService.getMockData(url).subscribe((data) => {
=======
    this.mockDataService.getAllProductData(url).subscribe((data) => {
>>>>>>> 31e255fceda10587226792bcd2796cd0a331851e
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
