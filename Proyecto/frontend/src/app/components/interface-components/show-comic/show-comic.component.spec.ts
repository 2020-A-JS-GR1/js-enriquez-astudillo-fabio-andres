import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComicComponent } from './show-comic.component';

describe('ShowComicComponent', () => {
  let component: ShowComicComponent;
  let fixture: ComponentFixture<ShowComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
