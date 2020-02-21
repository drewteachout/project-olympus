import { Location } from '@angular/common';
import { NgZone } from '@angular/core';
import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { MatGridListModule, MatButtonModule, MatToolbarModule, } from '@angular/material';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamsMenuComponent } from './teams/teams-menu/teams-menu.component';
import { PlayersMenuComponent } from './players/players-menu/players-menu.component';
import { GamesMenuComponent } from './games/games-menu/games-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeaguesMenuComponent } from './leagues/leagues-menu/leagues-menu.component';

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
        SettingsComponent,
        TeamsMenuComponent,
        PlayersMenuComponent,
        GamesMenuComponent,
        PageNotFoundComponent,
        LeaguesMenuComponent
      ],
      imports: [
        MatGridListModule,
        MatButtonModule,
        MatToolbarModule,
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
