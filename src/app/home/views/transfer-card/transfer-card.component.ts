import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transfer-card',
  templateUrl: './transfer-card.component.html',
  styleUrls: ['./transfer-card.component.sass'],
})
export class TransferCardComponent {
  @Input() transferInfo!: any;
}
