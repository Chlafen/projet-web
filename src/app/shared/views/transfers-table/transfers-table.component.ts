import { Component, Input } from '@angular/core';
import { Datum, FeeText } from 'src/app/common/types/league';

@Component({
  selector: 'app-transfers-table',
  templateUrl: './transfers-table.component.html',
  styleUrls: ['./transfers-table.component.sass'],
})
export class TransfersTableComponent {
  @Input() transfers: Datum[] = [];

  getFee(transfer: Datum): string {
    if (transfer.fee == null) return '';
    if (transfer.fee.feeText == FeeText.Fee) return transfer.fee.value ?? '';
    return transfer.fee.feeText ?? transfer.fee.localizedFeeText ?? '';
  }
  getFromClubImg() {
    return `https://images.fotmob.com/image_resources/logo/teamlogo/${this.transfers[0].fromClubId}_xsmall.png`;
  }
}
