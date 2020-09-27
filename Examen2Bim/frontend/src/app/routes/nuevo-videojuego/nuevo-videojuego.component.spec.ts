import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVideojuegoComponent } from './nuevo-videojuego.component';

describe('NuevoVideojuegoComponent', () => {
  let component: NuevoVideojuegoComponent;
  let fixture: ComponentFixture<NuevoVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
