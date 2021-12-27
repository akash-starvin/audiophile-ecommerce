import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { SummaryComponent } from './components/summary/summary.component';
import { ContainerComponent } from './components/container/container.component';
import { CoreModule } from '../core/core.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    SummaryComponent,
    ContainerComponent,
    FormComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class CheckoutModule {}
