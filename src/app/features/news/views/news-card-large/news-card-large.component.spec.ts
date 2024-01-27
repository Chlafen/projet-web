import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardLargeComponent } from './news-card-large.component';

describe('NewsCardLargeComponent', () => {
  let component: NewsCardLargeComponent;
  let fixture: ComponentFixture<NewsCardLargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsCardLargeComponent]
    });
    fixture = TestBed.createComponent(NewsCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
