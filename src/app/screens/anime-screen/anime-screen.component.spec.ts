import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeScreenComponent } from './anime-screen.component';

describe('AnimeScreenComponent', () => {
  let component: AnimeScreenComponent;
  let fixture: ComponentFixture<AnimeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
