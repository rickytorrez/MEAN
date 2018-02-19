import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollNewComponent } from './poll-new.component';

describe('PollNewComponent', () => {
  let component: PollNewComponent;
  let fixture: ComponentFixture<PollNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
