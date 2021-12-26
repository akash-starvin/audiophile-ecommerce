import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'checkout-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
