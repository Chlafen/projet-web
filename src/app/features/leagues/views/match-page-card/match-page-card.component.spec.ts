import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPageCardComponent } from './match-page-card.component';

describe('MatchPageCardComponent', () => {
  let component: MatchPageCardComponent;
  let fixture: ComponentFixture<MatchPageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchPageCardComponent]
    });
    fixture = TestBed.createComponent(MatchPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
