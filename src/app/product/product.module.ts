import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListingContainerComponent } from './listing-container/listing-container.component';
import { CategoryBannerComponent } from './category-banner/category-banner.component';


@NgModule({
  declarations: [
    ListingContainerComponent,
    CategoryBannerComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
