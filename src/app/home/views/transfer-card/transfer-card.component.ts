import { Component, Input } from '@angular/core';
import { Transfer } from 'src/app/common/types/transfers';

@Component({
  selector: 'app-transfer-card',
  templateUrl: './transfer-card.component.html',
  styleUrls: ['./transfer-card.component.sass'],
})
export class TransferCardComponent {
  @Input() transferInfo!: Transfer;
}
