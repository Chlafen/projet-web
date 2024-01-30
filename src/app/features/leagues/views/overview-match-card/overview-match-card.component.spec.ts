import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewMatchCardComponent } from './overview-match-card.component';

describe('OverviewMatchCardComponent', () => {
  let component: OverviewMatchCardComponent;
  let fixture: ComponentFixture<OverviewMatchCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewMatchCardComponent]
    });
    fixture = TestBed.createComponent(OverviewMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
