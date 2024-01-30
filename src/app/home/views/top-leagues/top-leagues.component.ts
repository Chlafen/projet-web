import { Component, Input } from '@angular/core';
import { League } from 'src/app/common/types/all-leagues';

@Component({
  selector: 'app-top-leagues',
  templateUrl: './top-leagues.component.html',
  styleUrls: ['./top-leagues.component.sass'],
})
export class TopLeaguesComponent {
  @Input() leagues!: League[];
}
