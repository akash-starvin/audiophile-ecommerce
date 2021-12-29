import { Component, Input, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/core/services/mock-data.service';
import { Others } from '../../interface/others';

@Component({
  selector: 'recomended-products',
  templateUrl: './recomended-products.component.html',
  styleUrls: ['./recomended-products.component.scss'],
})
export class RecomendedProductsComponent implements OnInit {
  @Input()
  products: Others[] = [];
  URL_PRODUCT_JSON: string = '../../../../assets/json/products.json';
  jsonResponse: any;
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
      .getMockData(this.URL_PRODUCT_JSON)
      .subscribe((data: any) => {
        this.jsonResponse = data;
        this.getProduct();
      });
  }
}
