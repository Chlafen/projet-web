import { Component } from '@angular/core';

@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.sass'],
})
export class HomeFilterComponent {
  filters: string[] = ['All', 'Ongoing', 'On TV', 'By Team'];
}
