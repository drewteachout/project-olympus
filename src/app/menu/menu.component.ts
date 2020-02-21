import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() addEnabled = true;
  @Input() addLink: string;
  @Input() homeLink = '/home';
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
