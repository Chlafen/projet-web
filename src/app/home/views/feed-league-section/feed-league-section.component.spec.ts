import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedLeagueSectionComponent } from './feed-league-section.component';

describe('FeedLeagueSectionComponent', () => {
  let component: FeedLeagueSectionComponent;
  let fixture: ComponentFixture<FeedLeagueSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedLeagueSectionComponent]
    });
    fixture = TestBed.createComponent(FeedLeagueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
