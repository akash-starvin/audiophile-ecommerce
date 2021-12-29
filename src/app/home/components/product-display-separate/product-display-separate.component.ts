import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-product-display-separate',
  templateUrl: './product-display-separate.component.html',
  styleUrls: ['./product-display-separate.component.scss'],
})
export class ProductDisplaySeparateComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
