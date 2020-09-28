import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaFormComponent } from './consola-form.component';

describe('ConsolaFormComponent', () => {
  let component: ConsolaFormComponent;
  let fixture: ComponentFixture<ConsolaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
