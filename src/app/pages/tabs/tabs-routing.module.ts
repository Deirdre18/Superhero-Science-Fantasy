import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: () => import('../films/films.module').then( m => m.FilmsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../film-details/film-details.module').then( m => m.FilmDetailsPageModule)
          }
        ]
      },
      {
        path: 'starships',
        children: [
          {
            path: '',
            loadChildren: () => import('../starships/starships.module').then( m => m.StarshipsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../starship-details/starship-details.module').then( m => m.StarshipDetailsPageModule)
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: () => import('../people/people.module').then( m => m.PeoplePageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../person-details/person-details.module').then( m => m.PersonDetailsPageModule)
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: () => import('../planets/planets.module').then( m => m.PlanetsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../planet-details/planet-details.module').then( m => m.PlanetDetailsPageModule)
          }
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
