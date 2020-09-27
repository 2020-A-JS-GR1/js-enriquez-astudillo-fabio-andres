import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRouteComponent } from './cart-route.component';

describe('CartRouteComponent', () => {
  let component: CartRouteComponent;
  let fixture: ComponentFixture<CartRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
