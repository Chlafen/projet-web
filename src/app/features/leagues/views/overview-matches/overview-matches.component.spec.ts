import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewMatchesComponent } from './overview-matches.component';

describe('OverviewMatchesComponent', () => {
  let component: OverviewMatchesComponent;
  let fixture: ComponentFixture<OverviewMatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewMatchesComponent]
    });
    fixture = TestBed.createComponent(OverviewMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
