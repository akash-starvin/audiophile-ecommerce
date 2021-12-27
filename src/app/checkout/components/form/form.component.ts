import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
        this.formGroup.addControl(
          field.key,
          this.formBuilder.group({ Name: [field.key], Value: [''] })
        );
      });
    });
  }
}
