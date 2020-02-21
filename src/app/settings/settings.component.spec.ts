import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { MenuComponent } from '../menu/menu.component';
import { MatToolbarModule } from '@angular/material';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent, MenuComponent ],
      imports: [ MatToolbarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
