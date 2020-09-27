import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaConsolaComponent } from './nueva-consola.component';

describe('NuevaConsolaComponent', () => {
  let component: NuevaConsolaComponent;
  let fixture: ComponentFixture<NuevaConsolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaConsolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
