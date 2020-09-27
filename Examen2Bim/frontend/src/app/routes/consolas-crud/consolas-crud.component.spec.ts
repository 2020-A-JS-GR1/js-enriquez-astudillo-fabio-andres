import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolasCrudComponent } from './consolas-crud.component';

describe('ConsolasCrudComponent', () => {
  let component: ConsolasCrudComponent;
  let fixture: ComponentFixture<ConsolasCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolasCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
