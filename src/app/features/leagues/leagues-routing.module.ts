import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './leagues.component';
import { NewsComponent } from './views/news/news.component';
import { OverviewComponent } from './views/overview/overview.component';
import { MatchesComponent } from './views/matches/matches.component';
import { TransfersComponent } from './views/transfers/transfers.component';

const routes: Routes = [
  {
    path: '',
    component: LeaguesComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'news', component: NewsComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'matches', component: MatchesComponent },
      { path: 'transfers', component: TransfersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaguesRoutingModule {}
