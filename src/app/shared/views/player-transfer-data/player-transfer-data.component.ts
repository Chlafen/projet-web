import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/common/types/league';

@Component({
  selector: 'app-player-transfer-data',
  templateUrl: './player-transfer-data.component.html',
  styleUrls: ['./player-transfer-data.component.sass'],
})
export class PlayerTransferDataComponent {
  @Input() playerId!: number;
  @Input() playerName!: string;
  @Input() toClub!: string;
  @Input() toClubId!: number;
}
