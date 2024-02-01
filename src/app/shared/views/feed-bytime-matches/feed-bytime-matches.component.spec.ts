import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBytimeMatchesComponent } from './feed-bytime-matches.component';

describe('FeedBytimeMatchesComponent', () => {
  let component: FeedBytimeMatchesComponent;
  let fixture: ComponentFixture<FeedBytimeMatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedBytimeMatchesComponent]
    });
    fixture = TestBed.createComponent(FeedBytimeMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
