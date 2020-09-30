import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFiguraScreenComponent } from './detalle-figura-screen.component';

describe('DetalleFiguraScreenComponent', () => {
  let component: DetalleFiguraScreenComponent;
  let fixture: ComponentFixture<DetalleFiguraScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleFiguraScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFiguraScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
