import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.scss'],
})
export class CategoryBannerComponent implements OnInit {
  @Input() path!: string;

  constructor() {}

  ngOnInit(): void {}
}
