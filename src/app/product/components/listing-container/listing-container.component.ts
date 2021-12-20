import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interface/product';
import { ProductDataService } from '../../service/product-data.service';

@Component({
  selector: 'app-listing-container',
  templateUrl: './listing-container.component.html',
  styleUrls: ['./listing-container.component.scss'],
})
export class ListingContainerComponent implements OnInit {
  URL_PRODUCT_JSON: string = '../../../../assets/json/products.json';
  productCategory: string = '';
  jsonResponse: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService
  ) {}

  ngOnInit() {
    this.route?.parent?.url.subscribe((url) => {
      this.productCategory = url[0].path;
    });
    this.getAllProductData(this.URL_PRODUCT_JSON);
  }

  getAllProductData(url: string) {
    this.productDataService.getAllProductData(url).subscribe((data) => {
      this.jsonResponse = data;
      console.log(data);
    });
  }
}
