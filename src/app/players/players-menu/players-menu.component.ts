import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-menu',
  templateUrl: './players-menu.component.html',
  styleUrls: ['./players-menu.component.scss']
})
export class PlayersMenuComponent implements OnInit {

  title = 'My Players';

  constructor() { }

  ngOnInit(): void {
  }

}
