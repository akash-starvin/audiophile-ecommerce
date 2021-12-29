import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/core/constants/Constants';
import { MockDataService } from 'src/app/core/services/mock-data.service';
import { Others } from '../../interface/others';
import { Product } from '../../interface/product';

@Component({
  selector: 'recomended-products',
  templateUrl: './recomended-products.component.html',
  styleUrls: ['./recomended-products.component.scss'],
})
export class RecomendedProductsComponent implements OnInit {
  @Input()
  products: Others[] = [];
  jsonResponse: Product[] = [];
  searchProductId: string = '';

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {}

  openProduct(id: string) {
    this.searchProductId = id;
    this.fetchAllProducts();
  }

  getProduct() {
    let objIndex = this.jsonResponse.findIndex(
      (obj: { slug: string }) => obj.slug == this.searchProductId
    );
    window.scroll({ top: 0, behavior: 'smooth' });
    this.mockDataService.selectedProduct.next(this.jsonResponse[objIndex]);
  }

  fetchAllProducts() {
    this.mockDataService
      .getMockData(Constants.PRODUCTS_JSON_PATH)
      .subscribe((data: Product[]) => {
        this.jsonResponse = data;
        this.getProduct();
      });
  }
}
