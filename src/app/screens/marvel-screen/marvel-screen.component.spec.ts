import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelScreenComponent } from './marvel-screen.component';

describe('MarvelScreenComponent', () => {
  let component: MarvelScreenComponent;
  let fixture: ComponentFixture<MarvelScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
