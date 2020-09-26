import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsScreenComponent } from './comics-screen.component';

describe('ComicsScreenComponent', () => {
  let component: ComicsScreenComponent;
  let fixture: ComponentFixture<ComicsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
