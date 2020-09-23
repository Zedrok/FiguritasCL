import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcScreenComponent } from './dc-screen.component';

describe('DcScreenComponent', () => {
  let component: DcScreenComponent;
  let fixture: ComponentFixture<DcScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
