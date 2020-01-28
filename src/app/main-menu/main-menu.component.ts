import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'My Games', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 2, rows: 1, color: 'lightgreen'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
