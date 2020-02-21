import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatGridListModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { routes, AppRoutingModule } from 'src/app/app-routing.module';

import { AddLeagueComponent } from './add-league.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { MainMenuComponent } from 'src/app/main-menu/main-menu.component';
import { GamesMenuComponent } from 'src/app/games/games-menu/games-menu.component';
import { LeaguesMenuComponent } from '../leagues-menu/leagues-menu.component';
import { PlayersMenuComponent } from 'src/app/players/players-menu/players-menu.component';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { TeamsMenuComponent } from 'src/app/teams/teams-menu/teams-menu.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

describe('AddLeagueComponent', () => {
  let component: AddLeagueComponent;
  let fixture: ComponentFixture<AddLeagueComponent>;

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
    fixture = TestBed.createComponent(AddLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
