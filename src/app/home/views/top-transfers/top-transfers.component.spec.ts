import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTransfersComponent } from './top-transfers.component';

describe('TopTransfersComponent', () => {
  let component: TopTransfersComponent;
  let fixture: ComponentFixture<TopTransfersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTransfersComponent]
    });
    fixture = TestBed.createComponent(TopTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
