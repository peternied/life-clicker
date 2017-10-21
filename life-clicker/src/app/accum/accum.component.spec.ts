import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumComponent } from './accum.component';

describe('AccumComponent', () => {
  let component: AccumComponent;
  let fixture: ComponentFixture<AccumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
