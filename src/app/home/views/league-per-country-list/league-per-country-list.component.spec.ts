import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguePerCountryListComponent } from './league-per-country-list.component';

describe('LeaguePerCountryListComponent', () => {
  let component: LeaguePerCountryListComponent;
  let fixture: ComponentFixture<LeaguePerCountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaguePerCountryListComponent]
    });
    fixture = TestBed.createComponent(LeaguePerCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
