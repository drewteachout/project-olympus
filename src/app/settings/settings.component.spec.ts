import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatGridListModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule, routes } from '../app-routing.module';

import { AddLeagueComponent } from '../leagues/add-league/add-league.component';
import { GamesMenuComponent } from '../games/games-menu/games-menu.component';
import { LeaguesMenuComponent } from '../leagues/leagues-menu/leagues-menu.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { MenuComponent } from '../menu/menu.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PlayersMenuComponent } from '../players/players-menu/players-menu.component';
import { SettingsComponent } from './settings.component';
import { TeamsMenuComponent } from '../teams/teams-menu/teams-menu.component';


describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddLeagueComponent,
        GamesMenuComponent,
        LeaguesMenuComponent,
        MainMenuComponent,
        MenuComponent,
        PageNotFoundComponent,
        PlayersMenuComponent,
        SettingsComponent,
        TeamsMenuComponent
      ],
      imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatGridListModule,
        MatInputModule,
        MatToolbarModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes(routes)
      ]
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
