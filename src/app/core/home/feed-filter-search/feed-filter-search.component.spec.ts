import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedFilterSearchComponent } from './feed-filter-search.component';

describe('FeedFilterSearchComponent', () => {
  let component: FeedFilterSearchComponent;
  let fixture: ComponentFixture<FeedFilterSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedFilterSearchComponent]
    });
    fixture = TestBed.createComponent(FeedFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
