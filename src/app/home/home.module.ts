import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    ContainerComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
