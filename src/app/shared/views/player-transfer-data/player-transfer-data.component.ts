import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/common/types/league';

@Component({
  selector: 'app-player-transfer-data',
  templateUrl: './player-transfer-data.component.html',
  styleUrls: ['./player-transfer-data.component.sass'],
})
export class PlayerTransferDataComponent implements OnInit {
  @Input() playerId!: number;
  @Input() toClub!: string;
  @Input() toClubId!: number;
  playerImage?: string;
  toClubImage?: string;

  player: Player = {
    name: 'Lionel Messi',
  };

  ngOnInit(): void {
    this.playerImage = `https://images.fotmob.com/image_resources/playerimages/${this.playerId}.png`;
    this.toClubImage = `https://images.fotmob.com/image_resources/logo/teamlogo/${this.toClubId}_xsmall.png`;
  }
}
