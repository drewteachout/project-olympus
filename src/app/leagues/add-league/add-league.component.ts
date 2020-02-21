import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-league',
  templateUrl: './add-league.component.html',
  styleUrls: ['./add-league.component.scss']
})
export class AddLeagueComponent implements OnInit {

  name = new FormControl('');
  title = 'Create League';

  constructor() { }

  ngOnInit(): void {
  }

}
