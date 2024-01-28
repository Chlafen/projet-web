import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTransferDataComponent } from './player-transfer-data.component';

describe('PlayerTransferDataComponent', () => {
  let component: PlayerTransferDataComponent;
  let fixture: ComponentFixture<PlayerTransferDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerTransferDataComponent]
    });
    fixture = TestBed.createComponent(PlayerTransferDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
