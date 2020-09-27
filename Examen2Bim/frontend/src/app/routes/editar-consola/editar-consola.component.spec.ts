import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsolaComponent } from './editar-consola.component';

describe('EditarConsolaComponent', () => {
  let component: EditarConsolaComponent;
  let fixture: ComponentFixture<EditarConsolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarConsolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
