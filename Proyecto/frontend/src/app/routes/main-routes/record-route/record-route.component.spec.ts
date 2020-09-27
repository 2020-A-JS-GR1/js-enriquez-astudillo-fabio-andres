import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRouteComponent } from './record-route.component';

describe('RecordRouteComponent', () => {
  let component: RecordRouteComponent;
  let fixture: ComponentFixture<RecordRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
