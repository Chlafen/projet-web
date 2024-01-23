import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferIconComponent } from './transfer-icon.component';

describe('TransferIconComponent', () => {
  let component: TransferIconComponent;
  let fixture: ComponentFixture<TransferIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferIconComponent]
    });
    fixture = TestBed.createComponent(TransferIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
