import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurServicesPage } from './our-services.page';

describe('OurServicesPage', () => {
  let component: OurServicesPage;
  let fixture: ComponentFixture<OurServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
