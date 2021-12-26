import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { SummaryComponent } from './components/summary/summary.component';
import { ContainerComponent } from './components/container/container.component';
import { CoreModule } from '../core/core.module';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [SummaryComponent, ContainerComponent, FormComponent],
  imports: [CommonModule, CheckoutRoutingModule, CoreModule],
})
export class CheckoutModule {}
