import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPredComponent } from './nav-bar-pred.component';

describe('NavBarPredComponent', () => {
  let component: NavBarPredComponent;
  let fixture: ComponentFixture<NavBarPredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarPredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarPredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
