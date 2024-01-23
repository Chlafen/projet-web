import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowRightSolidComponent } from './arrow-right-solid.component';

describe('ArrowRightSolidComponent', () => {
  let component: ArrowRightSolidComponent;
  let fixture: ComponentFixture<ArrowRightSolidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowRightSolidComponent]
    });
    fixture = TestBed.createComponent(ArrowRightSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
