import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitaleComponent } from './hopitale.component';

describe('HopitaleComponent', () => {
  let component: HopitaleComponent;
  let fixture: ComponentFixture<HopitaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopitaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopitaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
