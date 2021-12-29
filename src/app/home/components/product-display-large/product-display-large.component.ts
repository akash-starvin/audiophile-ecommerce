import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-product-display-large',
  templateUrl: './product-display-large.component.html',
  styleUrls: ['./product-display-large.component.scss'],
})
export class ProductDisplayLargeComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
