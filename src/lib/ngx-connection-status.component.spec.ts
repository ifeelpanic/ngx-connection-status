import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxConnectionStatusComponent } from './ngx-connection-status.component';

describe('NgxConnectionStatusComponent', () => {
  let component: NgxConnectionStatusComponent;
  let fixture: ComponentFixture<NgxConnectionStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxConnectionStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxConnectionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
