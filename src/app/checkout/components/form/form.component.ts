import { Component, OnChanges, OnInit } from '@angular/core';
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
  summaryClick: boolean = false;

  constructor(
    private formSerive: FormService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formSerive.getFormData(this.url).subscribe((data: any) => {
      this.formResponse = data;
      this.initForm();
    });

    this.formSerive.checkForm.subscribe((result) => {
      this.summaryClick = result;
      if (this.summaryClick && this.formGroup?.status === 'VALID') {
        this.formSerive.validForm.next(true);
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
