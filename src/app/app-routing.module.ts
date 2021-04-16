import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products-create',
    loadChildren: () => import('./products/products-create/products-create.module').then( m => m.ProductsCreatePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products-list/products-list.module').then( m => m.ProductsListPageModule)
  },
  {
    path: 'products-edit/:id',
    loadChildren: () => import('./products/products-edit/products-edit.module').then(m => m.ProductsEditPageModule)
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./products/products-detail/products-detail.module').then( m => m.ProductsDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
