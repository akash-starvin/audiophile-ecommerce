import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListingContainerComponent } from './components/listing-container/listing-container.component';
import { CategoryBannerComponent } from './components/category-banner/category-banner.component';
import { CoreModule } from '../core/core.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FeaturesComponent } from './components/features/features.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RecomendedProductsComponent } from './components/recomended-products/recomended-products.component';

@NgModule({
  declarations: [
    ListingContainerComponent,
    CategoryBannerComponent,
    ProductCardComponent,
    ProductDetailComponent,
    CurrencyPipe,
    FeaturesComponent,
    GalleryComponent,
    RecomendedProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CoreModule
  ]
})
export class ProductModule { }
