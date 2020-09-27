import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoCrudComponent } from './videojuego-crud.component';

describe('VideojuegoCrudComponent', () => {
  let component: VideojuegoCrudComponent;
  let fixture: ComponentFixture<VideojuegoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
