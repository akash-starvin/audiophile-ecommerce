import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() images: any;

  constructor() {}

  ngOnInit(): void {}
}
