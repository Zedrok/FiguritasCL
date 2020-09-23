import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroComprasScreenComponent } from './carro-compras-screen.component';

describe('CarroComprasScreenComponent', () => {
  let component: CarroComprasScreenComponent;
  let fixture: ComponentFixture<CarroComprasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroComprasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroComprasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
