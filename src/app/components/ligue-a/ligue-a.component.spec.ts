import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigueAComponent } from './ligue-a.component';

describe('LigueAComponent', () => {
  let component: LigueAComponent;
  let fixture: ComponentFixture<LigueAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigueAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigueAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
