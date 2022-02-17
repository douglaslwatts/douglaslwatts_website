import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemP2Component } from './operating-system-p2.component';

describe('OperatingSystemP2Component', () => {
  let component: OperatingSystemP2Component;
  let fixture: ComponentFixture<OperatingSystemP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatingSystemP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingSystemP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
