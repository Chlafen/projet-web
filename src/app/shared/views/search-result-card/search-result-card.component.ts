import { Component, Input } from '@angular/core';
import { IListItem } from '../search-result-group/search-result-group.component';

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.sass'],
})
export class SearchResultCardComponent {
  @Input() leagueSearchReslt!: IListItem[];
  @Input() matchSearchReslt!: IListItem[];
  @Input() teamSearchReslt!: IListItem[];
  @Input() isLoading!: boolean;
}
