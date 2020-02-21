import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesMenuComponent } from './leagues-menu.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { MatToolbarModule } from '@angular/material';

describe('LeaguesMenuComponent', () => {
  let component: LeaguesMenuComponent;
  let fixture: ComponentFixture<LeaguesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesMenuComponent, MenuComponent ],
      imports: [ MatToolbarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
