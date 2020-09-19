import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ligue1Component } from './ligue1.component';

describe('Ligue1Component', () => {
  let component: Ligue1Component;
  let fixture: ComponentFixture<Ligue1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ligue1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ligue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
