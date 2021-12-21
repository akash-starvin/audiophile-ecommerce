import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'recomended-products',
  templateUrl: './recomended-products.component.html',
  styleUrls: ['./recomended-products.component.scss']
})
export class RecomendedProductsComponent implements OnInit {

  @Input() products: any;

  constructor() { }

  ngOnInit(): void {
  }

}
