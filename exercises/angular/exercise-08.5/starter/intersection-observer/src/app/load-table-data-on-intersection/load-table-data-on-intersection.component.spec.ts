import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTableDataOnIntersectionComponent } from './load-table-data-on-intersection.component';

describe('LoadTableDataOnIntersectionComponent', () => {
  let component: LoadTableDataOnIntersectionComponent;
  let fixture: ComponentFixture<LoadTableDataOnIntersectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadTableDataOnIntersectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTableDataOnIntersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
