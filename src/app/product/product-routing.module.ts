import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingContainerComponent } from './listing-container/listing-container.component';

const routes: Routes = [
  {
    path:'',
    component: ListingContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
