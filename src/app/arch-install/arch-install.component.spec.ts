import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchInstallComponent } from './arch-install.component';

describe('ArchInstallComponent', () => {
  let component: ArchInstallComponent;
  let fixture: ComponentFixture<ArchInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchInstallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
