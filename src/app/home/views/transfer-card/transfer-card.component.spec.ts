import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferCardComponent } from './transfer-card.component';

describe('TransferCardComponent', () => {
  let component: TransferCardComponent;
  let fixture: ComponentFixture<TransferCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferCardComponent]
    });
    fixture = TestBed.createComponent(TransferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
