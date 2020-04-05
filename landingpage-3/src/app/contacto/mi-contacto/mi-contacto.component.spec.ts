import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiContactoComponent } from './mi-contacto.component';

describe('MiContactoComponent', () => {
  let component: MiContactoComponent;
  let fixture: ComponentFixture<MiContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
