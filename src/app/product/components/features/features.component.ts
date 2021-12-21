import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  @Input() features :any;
  @Input() includedItems:any;

  constructor() { }

  ngOnInit(): void {
  }

}
