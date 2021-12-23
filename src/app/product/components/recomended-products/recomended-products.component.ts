import { Component, Input, OnInit } from '@angular/core';
import { Others } from '../../interface/others';
import { ProductDataService } from '../../service/product-data.service';

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

  constructor(private productDataService: ProductDataService) {}

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
    this.productDataService.selectedProduct.next(this.jsonResponse[objIndex]);
  }

  fetchAllProducts() {
    this.productDataService
      .getAllProductData(this.URL_PRODUCT_JSON)
      .subscribe((data) => {
        this.jsonResponse = data;
        this.getProduct();
      });
  }
}
