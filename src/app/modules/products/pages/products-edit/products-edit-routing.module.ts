import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsEditPage } from './products-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsEditPageRoutingModule {}
