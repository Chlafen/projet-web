import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { LeagueImagePipe } from 'src/app/shared/pipes/league-image/league-image.pipe';
import { LeagueUrlPipe } from 'src/app/shared/pipes/league-url/league-url.pipe';
import { TeamImagePipe } from 'src/app/shared/pipes/team-image/team-image.pipe';
import { IListItem } from 'src/app/shared/views/search-result-group/search-result-group.component';
import { loadSearch } from 'src/app/state/actions/search.action';
import { getSearch, getsearchStatus } from 'src/app/state/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  search$ = this.store.select(getSearch);
  searchStatus$ = this.store.select(getsearchStatus);

  teamSearchReslt$ = this.search$.pipe(
    map((data): IListItem[] => {
      const teamSuggest = data?.teamSuggest ?? [];
      if (teamSuggest.length == 0) return [];

      return (
        teamSuggest[0].options?.map((team) => {
          return {
            name: team.text.split('|')[0].trim() ?? 'Team',
            leftImg: new TeamImagePipe().transform(parseInt(team.payload.id!)),
            type: 'Team',
          };
        }) ?? []
      );
    })
  );
  leagueSearchReslt$ = this.search$.pipe(
    map((data): IListItem[] => {
      const leagueSuggest = data?.leagueSuggest ?? [];
      if (leagueSuggest.length == 0) return [];
      console.log('before tap', leagueSuggest);

      return (
        leagueSuggest[0].options?.map((league) => {
          return {
            name: league?.text.split('|')[0].trim() ?? 'League',
            url: new LeagueUrlPipe().transform(parseInt(league?.payload.id!)),
            leftImg: new LeagueImagePipe().transform(
              parseInt(league?.payload.id!)
            ),
            type: 'League',
          };
        }) ?? []
      );
    }),
    tap((data) => console.log(data))
  );
  matchSearchReslt$ = this.search$.pipe(
    map((data): IListItem[] => {
      const matchSuggest = data?.matchSuggest ?? [];
      if (matchSuggest.length == 0) return [];
      return (
        matchSuggest[0].options?.map((match) => {
          return {
            name: match.text ?? 'Match',
            leftImg: new TeamImagePipe().transform(
              parseInt(match.payload.homeTeamId!)
            ),
            rightImg: new TeamImagePipe().transform(
              parseInt(match.payload.awayTeamId!)
            ),
            type: 'Team',
          };
        }) ?? []
      );
    })
  );

  constructor(private store: Store) {}
  onSearchCallBack(value: string) {
    this.store.dispatch(loadSearch({ query: value }));
  }
}
