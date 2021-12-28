import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormService } from '../../service/form.service';

@Component({
  selector: 'checkout-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  url: string = '../../../../assets/json/form.json';
  formResponse: any;
  formGroup!: FormGroup;
  isCashOnDelivery: boolean = false;

  constructor(
    private productDataService: FormService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productDataService.getFormData(this.url).subscribe((data: any) => {
      this.formResponse = data;
      this.initForm();
    });
  }

  initForm() {
    this.formGroup = this.formBuilder.group({});
    this.formResponse.forEach((section: any) => {
      section.fields.forEach((field: any) => {
        this.formGroup.addControl(field.key, new FormControl(''));
      });
    });
  }

  changeRadioStatus(key: string) {
    if (key === 'cashondelivery') {
      this.formGroup.removeControl('emoneynumber');
      this.formGroup.removeControl('emoneypin');
      this.isCashOnDelivery = true;
    } else {
      this.formGroup.addControl('emoneynumber', new FormControl(''));
      this.formGroup.addControl('emoneypin', new FormControl(''));
      this.isCashOnDelivery = false;
    }
  }
}
