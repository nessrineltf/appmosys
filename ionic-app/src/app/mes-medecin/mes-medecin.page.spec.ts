import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesMedecinPage } from './mes-medecin.page';

describe('MesMedecinPage', () => {
  let component: MesMedecinPage;
  let fixture: ComponentFixture<MesMedecinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesMedecinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesMedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
