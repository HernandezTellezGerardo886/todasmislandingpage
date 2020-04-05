import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoMasNuevoComponent } from './lo-mas-nuevo.component';

describe('LoMasNuevoComponent', () => {
  let component: LoMasNuevoComponent;
  let fixture: ComponentFixture<LoMasNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoMasNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoMasNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
