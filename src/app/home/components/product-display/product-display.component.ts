import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss'],
})
export class ProductDisplayComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
