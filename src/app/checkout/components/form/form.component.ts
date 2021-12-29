import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Constants } from 'src/app/core/constants/Constants';
import { MockDataService } from 'src/app/core/services/mock-data.service';

@Component({
  selector: 'checkout-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formResponse: any;
  formGroup!: FormGroup;
  isCashOnDelivery: boolean = false;
  summaryClick: boolean = false;

  constructor(
    private mockDataService: MockDataService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.mockDataService
      .getMockData(Constants.FORM_JSON_PATH)
      .subscribe((data: any) => {
        this.formResponse = data;
        this.initForm();
      });

    this.mockDataService.checkForm.subscribe((result) => {
      this.summaryClick = result;
      if (this.summaryClick && this.formGroup?.status === 'VALID') {
        this.mockDataService.validForm.next(true);
      }
    });
  }

  initForm() {
    this.formGroup = this.formBuilder.group({});
    this.formResponse.forEach((section: any) => {
      section.fields.forEach((field: any) => {
        switch (field.type) {
          case 'phonenumber':
            this.formGroup.addControl(
              field.key,
              new FormControl('', [
                Validators.required,
                Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
              ])
            );
            break;
          case 'email':
            this.formGroup.addControl(
              field.key,
              new FormControl('', [Validators.required, Validators.email])
            );
            break;
          case 'radio':
            this.formGroup.addControl(field.key, new FormControl(''));
            break;
          default:
            this.formGroup.addControl(
              field.key,
              new FormControl('', Validators.required)
            );
        }
      });
    });
  }

  changeRadioStatus(key: string) {
    if (key === 'cashondelivery') {
      this.formGroup.removeControl('emoneynumber');
      this.formGroup.removeControl('emoneypin');
      this.isCashOnDelivery = true;
    } else {
      this.formGroup.addControl(
        'emoneynumber',
        new FormControl('', Validators.required)
      );
      this.formGroup.addControl(
        'emoneypin',
        new FormControl('', Validators.required)
      );
      this.isCashOnDelivery = false;
    }
  }
}
