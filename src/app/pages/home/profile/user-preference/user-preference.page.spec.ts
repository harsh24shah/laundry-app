import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPreferencePage } from './user-preference.page';

describe('UserPreferencePage', () => {
  let component: UserPreferencePage;
  let fixture: ComponentFixture<UserPreferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPreferencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPreferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
