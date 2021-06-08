import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsDetailPage } from './products-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsDetailPageRoutingModule {}
