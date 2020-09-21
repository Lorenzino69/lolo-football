import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatDetailsComponent } from './resultat-details.component';

describe('ResultatDetailsComponent', () => {
  let component: ResultatDetailsComponent;
  let fixture: ComponentFixture<ResultatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
