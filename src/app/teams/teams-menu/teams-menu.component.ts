import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-menu',
  templateUrl: './teams-menu.component.html',
  styleUrls: ['./teams-menu.component.scss']
})
export class TeamsMenuComponent implements OnInit {

  title = 'My Teams';

  constructor() { }

  ngOnInit(): void {
  }

}
