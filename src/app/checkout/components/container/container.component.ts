import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'checkout-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  goToPreviousPage() {
    this.location.back();
  }
}
