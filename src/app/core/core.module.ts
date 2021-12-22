import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './modal/cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    CategoryContainerComponent,
    AboutComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, MatDialogModule],
  exports: [
    HeaderComponent,
    CategoryContainerComponent,
    AboutComponent,
    FooterComponent,
    CartComponent,
  ],
})
export class CoreModule {}
