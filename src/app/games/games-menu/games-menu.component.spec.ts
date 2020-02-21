import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesMenuComponent } from './games-menu.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { MatToolbarModule } from '@angular/material';

describe('GamesMenuComponent', () => {
  let component: GamesMenuComponent;
  let fixture: ComponentFixture<GamesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesMenuComponent, MenuComponent ],
      imports: [ MatToolbarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
