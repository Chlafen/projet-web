import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedFilterCapsuleComponent } from './feed-filter-capsule.component';

describe('FeedFilterCapsuleComponent', () => {
  let component: FeedFilterCapsuleComponent;
  let fixture: ComponentFixture<FeedFilterCapsuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedFilterCapsuleComponent]
    });
    fixture = TestBed.createComponent(FeedFilterCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
