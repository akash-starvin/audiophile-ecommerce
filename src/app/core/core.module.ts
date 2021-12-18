import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CategoryContainerComponent } from './components/category-container/category-container.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CategoryContainerComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    HeaderComponent,
    CategoryContainerComponent
  ]
})
export class CoreModule { }
