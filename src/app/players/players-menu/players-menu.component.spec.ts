import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersMenuComponent } from './players-menu.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { MatToolbarModule } from '@angular/material';

describe('PlayersMenuComponent', () => {
  let component: PlayersMenuComponent;
  let fixture: ComponentFixture<PlayersMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersMenuComponent, MenuComponent ],
      imports: [ MatToolbarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
