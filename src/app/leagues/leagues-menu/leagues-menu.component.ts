import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leagues-menu',
  templateUrl: './leagues-menu.component.html',
  styleUrls: ['./leagues-menu.component.scss']
})
export class LeaguesMenuComponent implements OnInit {

  title = 'My Leagues';

  constructor() { }

  ngOnInit(): void {
  }

}
