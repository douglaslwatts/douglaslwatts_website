import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemP3Component } from './operating-system-p3.component';

describe('OperatingSystemP3Component', () => {
  let component: OperatingSystemP3Component;
  let fixture: ComponentFixture<OperatingSystemP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatingSystemP3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingSystemP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
