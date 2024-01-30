import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowSolidLeftComponent } from './arrow-solid-left.component';

describe('ArrowSolidLeftComponent', () => {
  let component: ArrowSolidLeftComponent;
  let fixture: ComponentFixture<ArrowSolidLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowSolidLeftComponent]
    });
    fixture = TestBed.createComponent(ArrowSolidLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
