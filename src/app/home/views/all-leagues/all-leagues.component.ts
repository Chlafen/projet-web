import { Component, Input } from '@angular/core';
import { Country } from 'src/app/common/types/all-leagues';

@Component({
  selector: 'app-all-leagues',
  templateUrl: './all-leagues.component.html',
  styleUrls: ['./all-leagues.component.sass']
})
export class AllLeaguesComponent {
  @Input() countries!: Country[];
}
