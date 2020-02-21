import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GamesMenuComponent } from './games/games-menu/games-menu.component';
import { LeaguesMenuComponent } from './leagues/leagues-menu/leagues-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayersMenuComponent } from './players/players-menu/players-menu.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamsMenuComponent } from './teams/teams-menu/teams-menu.component';

export const routes: Routes = [
  { path: 'home', component: MainMenuComponent },
  { path: 'games', component: GamesMenuComponent },
  { path: 'leagues', component: LeaguesMenuComponent },
  { path: 'players', component: PlayersMenuComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'teams', component: TeamsMenuComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
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
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    NoopAnimationsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
