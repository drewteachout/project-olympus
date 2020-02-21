import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesMenuComponent } from './leagues-menu.component';

describe('LeaguesMenuComponent', () => {
  let component: LeaguesMenuComponent;
  let fixture: ComponentFixture<LeaguesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesMenuComponent ]
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
