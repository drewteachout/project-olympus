import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-menu',
  templateUrl: './games-menu.component.html',
  styleUrls: ['./games-menu.component.scss']
})
export class GamesMenuComponent implements OnInit {

  title = 'My Games';

  constructor() { }

  ngOnInit(): void {
  }

}
