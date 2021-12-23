import { Component, Input, OnInit } from '@angular/core';
import { Others } from '../../interface/others';

@Component({
  selector: 'recomended-products',
  templateUrl: './recomended-products.component.html',
  styleUrls: ['./recomended-products.component.scss'],
})
export class RecomendedProductsComponent implements OnInit {
  @Input()
  products: Others[] = [];

  constructor() {}

  ngOnInit(): void {}
}
