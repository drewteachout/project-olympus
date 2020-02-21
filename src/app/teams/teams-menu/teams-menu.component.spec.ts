import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsMenuComponent } from './teams-menu.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { MatToolbarModule } from '@angular/material';

describe('TeamsMenuComponent', () => {
  let component: TeamsMenuComponent;
  let fixture: ComponentFixture<TeamsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsMenuComponent, MenuComponent ],
      imports: [ MatToolbarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
