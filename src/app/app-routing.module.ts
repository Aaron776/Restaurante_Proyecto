import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  
  {
    path: 'entradas',
    loadChildren: () => import('./entradas/entradas.module').then( m => m.EntradasPageModule)
  },
  {
    path: 'postres',
    loadChildren: () => import('./postres/postres.module').then( m => m.PostresPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'platos-fuertes',
    loadChildren: () => import('./platos-fuertes/platos-fuertes.module').then( m => m.PlatosFuertesPageModule)
  },
  {
    path: 'item-detail/:id',
    loadChildren: () => import('./item-detail/item-detail.module').then( m => m.ItemDetailPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  
  
  
  
  
  
  
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
