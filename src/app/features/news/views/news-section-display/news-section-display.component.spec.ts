import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSectionDisplayComponent } from './news-section-display.component';

describe('NewsSectionDisplayComponent', () => {
  let component: NewsSectionDisplayComponent;
  let fixture: ComponentFixture<NewsSectionDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsSectionDisplayComponent]
    });
    fixture = TestBed.createComponent(NewsSectionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
