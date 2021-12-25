import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { BannerComponent } from './components/banner/banner.component';
import { CoreModule } from '../core/core.module';
import { ProductDisplayLargeComponent } from './components/product-display-large/product-display-large.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProductDisplaySeparateComponent } from './components/product-display-separate/product-display-separate.component';

@NgModule({
  declarations: [
    ContainerComponent,
    BannerComponent,
    ProductDisplayLargeComponent,
    ProductDisplayComponent,
    ProductDisplaySeparateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
