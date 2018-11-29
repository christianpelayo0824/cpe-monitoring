import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedEventComponent } from './closed-event.component';

describe('ClosedEventComponent', () => {
  let component: ClosedEventComponent;
  let fixture: ComponentFixture<ClosedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
