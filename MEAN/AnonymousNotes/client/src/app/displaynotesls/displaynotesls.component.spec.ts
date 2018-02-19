import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynoteslsComponent } from './displaynotesls.component';

describe('DisplaynoteslsComponent', () => {
  let component: DisplaynoteslsComponent;
  let fixture: ComponentFixture<DisplaynoteslsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaynoteslsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaynoteslsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
