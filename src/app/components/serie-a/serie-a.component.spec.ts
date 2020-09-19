import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieAComponent } from './serie-a.component';

describe('SerieAComponent', () => {
  let component: SerieAComponent;
  let fixture: ComponentFixture<SerieAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
