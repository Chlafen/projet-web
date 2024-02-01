import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListGridDisplayComponent } from './news-list-grid-display.component';

describe('NewsListGridDisplayComponent', () => {
  let component: NewsListGridDisplayComponent;
  let fixture: ComponentFixture<NewsListGridDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsListGridDisplayComponent]
    });
    fixture = TestBed.createComponent(NewsListGridDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
