import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatGridListModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule, routes } from 'src/app/app-routing.module';

import { AddLeagueComponent } from 'src/app/leagues/add-league/add-league.component';
import { GamesMenuComponent } from 'src/app/games/games-menu/games-menu.component';
import { LeaguesMenuComponent } from 'src/app/leagues/leagues-menu/leagues-menu.component';
import { MainMenuComponent } from 'src/app/main-menu/main-menu.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { PlayersMenuComponent } from './players-menu.component';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { TeamsMenuComponent } from 'src/app/teams/teams-menu/teams-menu.component';


describe('PlayersMenuComponent', () => {
  let component: PlayersMenuComponent;
  let fixture: ComponentFixture<PlayersMenuComponent>;

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
    fixture = TestBed.createComponent(PlayersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
