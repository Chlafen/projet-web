import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultGroupComponent } from './search-result-group.component';

describe('SearchResultGroupComponent', () => {
  let component: SearchResultGroupComponent;
  let fixture: ComponentFixture<SearchResultGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultGroupComponent]
    });
    fixture = TestBed.createComponent(SearchResultGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
