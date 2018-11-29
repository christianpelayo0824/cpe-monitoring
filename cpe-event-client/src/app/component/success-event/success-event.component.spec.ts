import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessEventComponent } from './success-event.component';

describe('SuccessEventComponent', () => {
  let component: SuccessEventComponent;
  let fixture: ComponentFixture<SuccessEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
