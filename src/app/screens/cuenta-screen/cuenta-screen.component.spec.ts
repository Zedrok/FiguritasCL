import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaScreenComponent } from './cuenta-screen.component';

describe('CuentaScreenComponent', () => {
  let component: CuentaScreenComponent;
  let fixture: ComponentFixture<CuentaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
