import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationOnIntersectionComponent } from './animation-on-intersection.component';

describe('AnimationOnIntersectionComponent', () => {
  let component: AnimationOnIntersectionComponent;
  let fixture: ComponentFixture<AnimationOnIntersectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationOnIntersectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationOnIntersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
