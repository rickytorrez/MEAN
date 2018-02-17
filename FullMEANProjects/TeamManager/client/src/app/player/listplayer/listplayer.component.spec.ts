import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplayerComponent } from './listplayer.component';

describe('ListplayerComponent', () => {
  let component: ListplayerComponent;
  let fixture: ComponentFixture<ListplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
