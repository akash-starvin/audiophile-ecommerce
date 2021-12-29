import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MockDataService } from 'src/app/core/services/mock-data.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productData: any;

  constructor(
    private mockDataService: MockDataService,
    private location: Location
  ) {}

  goToPreviousPage() {
    this.location.back();
  }

  ngOnInit(): void {
    this.mockDataService.selectedProduct.subscribe((value) => {
      this.productData = value;
    });
  }
}
