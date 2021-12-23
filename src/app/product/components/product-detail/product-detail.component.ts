import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../service/product-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productData: any;

  constructor(
    private productDataService: ProductDataService,
    private location: Location
  ) {}

  goToPreviousPage() {
    this.location.back();
  }

  ngOnInit(): void {
    this.productDataService.selectedProduct.subscribe((value) => {
      this.productData = value;
    });
  }
}
