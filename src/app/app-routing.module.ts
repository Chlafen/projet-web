import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultCardComponent } from './shared/views/search-result-card/search-result-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'test', component:SearchResultCardComponent },
  {
    path: 'news',
    loadChildren: () =>
      import('./features/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'transfers',
    loadChildren: () =>
      import('./features/transfers/transfers.module').then(
        (m) => m.TransfersModule
      ),
  },
  {
    path: 'leagues/:id',
    loadChildren: () =>
      import('./features/leagues/leagues.module').then((m) => m.LeaguesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
