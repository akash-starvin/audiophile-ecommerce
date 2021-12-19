import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'category-banner',
  templateUrl: './category-banner.component.html',
  styleUrls: ['./category-banner.component.scss']
})
export class CategoryBannerComponent implements OnInit {

  @Input() path: any;

  constructor() { }

  ngOnInit(): void {}
}
