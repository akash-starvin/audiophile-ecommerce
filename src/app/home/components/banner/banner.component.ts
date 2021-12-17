import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/core/Constants/Constants';

@Component({
  selector: 'home-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {}

}
