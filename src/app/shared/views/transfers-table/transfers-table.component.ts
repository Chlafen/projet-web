import { Component, Input } from '@angular/core';
import { Datum, FeeText } from 'src/app/common/types/league';
import { Transfer } from 'src/app/common/types/transfers';

@Component({
  selector: 'app-transfers-table',
  templateUrl: './transfers-table.component.html',
  styleUrls: ['./transfers-table.component.sass'],
})
export class TransfersTableComponent {
  @Input() transfers!: Transfer[];
}
