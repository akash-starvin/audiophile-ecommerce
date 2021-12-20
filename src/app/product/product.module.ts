import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListingContainerComponent } from './components/listing-container/listing-container.component';
import { CategoryBannerComponent } from './components/category-banner/category-banner.component';
import { CoreModule } from '../core/core.module';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    ListingContainerComponent,
    CategoryBannerComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CoreModule
  ]
})
export class ProductModule { }
