import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaComponent } from './bundesliga.component';

describe('BundesligaComponent', () => {
  let component: BundesligaComponent;
  let fixture: ComponentFixture<BundesligaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundesligaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundesligaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
