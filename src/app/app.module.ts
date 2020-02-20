import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule, MatButtonModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: 'home', component: MainMenuComponent },
  // { path: 'games', component: GamesMenuComponent },
  // { path: 'leagues', component: LeaguesMenuComponent },
  // { path: 'players', component: PlayersMenuComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'teams', component: MenuComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: MainMenuComponent } // Eventually add a page not found component
]

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MenuComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
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
