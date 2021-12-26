import { Component, OnInit } from '@angular/core';
import { FormService } from '../../service/form.service';

@Component({
  selector: 'checkout-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  url: string = '../../../../assets/json/form.json';
  formResponse: any;

  constructor(private productDataService: FormService) {}

  ngOnInit(): void {
    this.productDataService.getFormData(this.url).subscribe((data: any) => {
      this.formResponse = data;
    });
  }
}
