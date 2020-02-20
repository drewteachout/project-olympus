import { Location } from '@angular/common';
import { NgZone } from '@angular/core';
import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { MatGridListModule, MatButtonModule } from '@angular/material';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { routes } from './app.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';

describe('AppComponent', () => {

  let location: Location;
  let ngZone: NgZone;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainMenuComponent,
        MenuComponent,
        SettingsComponent
      ],
      imports: [
        MatGridListModule,
        MatButtonModule,
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    ngZone = TestBed.inject(NgZone);
    fixture = TestBed.createComponent(AppComponent);
    ngZone.run(() =>
      router.initialNavigation()
    );
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    ngZone.run(() =>
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/home');
      })
    );
  }));
});
