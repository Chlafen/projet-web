import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsOverviewListComponent } from './news-overview-list.component';

describe('NewsOverviewListComponent', () => {
  let component: NewsOverviewListComponent;
  let fixture: ComponentFixture<NewsOverviewListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsOverviewListComponent]
    });
    fixture = TestBed.createComponent(NewsOverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
