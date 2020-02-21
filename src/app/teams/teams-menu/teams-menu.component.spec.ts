import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsMenuComponent } from './teams-menu.component';

describe('TeamsMenuComponent', () => {
  let component: TeamsMenuComponent;
  let fixture: ComponentFixture<TeamsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsMenuComponent ]
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
