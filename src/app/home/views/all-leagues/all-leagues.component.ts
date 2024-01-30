import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { Country } from 'src/app/common/types/all-leagues';
import { allLeaguesActions } from 'src/app/state/actions';

@Component({
  selector: 'app-all-leagues',
  templateUrl: './all-leagues.component.html',
  styleUrls: ['./all-leagues.component.sass']
})
export class AllLeaguesComponent {
  @Input() countries!: Country[];
  openAll: boolean = false;

  constructor(private store: Store) { }

  onSearchText(text: string) {
    if (text == "") this.openAll = false
    else this.openAll = true

    this.store.dispatch(allLeaguesActions.searchAllLeagues(text));
  }
}
