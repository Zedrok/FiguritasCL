import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrincipalScreenComponent } from './pantalla-principal-screen.component';

describe('PantallaPrincipalScreenComponent', () => {
  let component: PantallaPrincipalScreenComponent;
  let fixture: ComponentFixture<PantallaPrincipalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaPrincipalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPrincipalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
