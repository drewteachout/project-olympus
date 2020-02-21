import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesMenuComponent } from './games/games-menu/games-menu.component';
import { AddLeagueComponent } from './leagues/add-league/add-league.component';
import { LeaguesMenuComponent } from './leagues/leagues-menu/leagues-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PlayersMenuComponent } from './players/players-menu/players-menu.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamsMenuComponent } from './teams/teams-menu/teams-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: MainMenuComponent },
  { path: 'games', component: GamesMenuComponent },
  { path: 'leagues',
    children: [
      { path: '', component: LeaguesMenuComponent },
      { path: 'create', component: AddLeagueComponent },
      { path: '**', component: LeaguesMenuComponent }
    ]
  },
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
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
