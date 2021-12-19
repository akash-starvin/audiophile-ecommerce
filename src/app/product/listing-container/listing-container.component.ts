import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-container',
  templateUrl: './listing-container.component.html',
  styleUrls: ['./listing-container.component.scss'],
})
export class ListingContainerComponent implements OnInit {
  path: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route?.parent?.url.subscribe((url) => {
      this.path = url[0].path;
    });
  }
}
