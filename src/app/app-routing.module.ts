import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./pages/starships/starships.module').then( m => m.StarshipsPageModule)
  },
  {
    path: 'starship-details',
    loadChildren: () => import('./pages/starship-details/starship-details.module').then( m => m.StarshipDetailsPageModule)
  },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
