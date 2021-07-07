import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologueComponent } from './radiologue.component';

describe('RadiologueComponent', () => {
  let component: RadiologueComponent;
  let fixture: ComponentFixture<RadiologueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiologueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
