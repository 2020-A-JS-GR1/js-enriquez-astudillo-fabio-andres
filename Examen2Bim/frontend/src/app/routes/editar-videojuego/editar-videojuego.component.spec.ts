import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVideojuegoComponent } from './editar-videojuego.component';

describe('EditarVideojuegoComponent', () => {
  let component: EditarVideojuegoComponent;
  let fixture: ComponentFixture<EditarVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
