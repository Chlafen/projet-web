import { Component, Input } from '@angular/core';
import { Transfer } from 'src/app/common/types/transfers';

@Component({
  selector: 'app-top-transfers',
  templateUrl: './top-transfers.component.html',
  styleUrls: ['./top-transfers.component.sass'],
})
export class TopTransfersComponent {
  @Input() transfers!: Transfer[];
}
