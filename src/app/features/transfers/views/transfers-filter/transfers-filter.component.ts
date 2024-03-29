import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Choice } from 'src/app/common/types/transfers';

@Component({
  selector: 'app-transfers-filter',
  templateUrl: './transfers-filter.component.html',
  styleUrls: ['./transfers-filter.component.sass'],
})
export class TransfersFilterComponent implements OnInit {
  @Input() name!: string;
  @Input() choices: Choice[] = [];
  @Input() selected!: string;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

  selectedChoice!: string;
  ngOnInit(): void {
    this.selectedChoice = this.selected;
  }

  onSelectedChange(choice: any): void {
    this.selectedChange.emit(choice);
  }
}
