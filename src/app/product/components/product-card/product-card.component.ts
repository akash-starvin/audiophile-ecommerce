import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../../service/product-data.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() data: any;
  @Input() rowReverse: any;
  @Input() isDetailView: any;

  MAX_COUNT: number = 10;
  productCount: number = 0;

  constructor(private productDataService: ProductDataService) { }

  ngOnInit(): void {
  }

  updateSelectedProduct(){
    this.productDataService.selectedProduct.next(this.data);
  }

  updateCount(val: number) {
    switch (val) {
      case -1:
        if (this.productCount > 0) this.productCount--;

        break;
      case 1:
        if (this.productCount < this.MAX_COUNT) this.productCount++;

        break;
      case 0:
        this.productCount = 0;
    }
  }
}
