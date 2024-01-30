import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsOverviewCardComponent } from './news-overview-card.component';

describe('NewsOverviewCardComponent', () => {
  let component: NewsOverviewCardComponent;
  let fixture: ComponentFixture<NewsOverviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsOverviewCardComponent]
    });
    fixture = TestBed.createComponent(NewsOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
