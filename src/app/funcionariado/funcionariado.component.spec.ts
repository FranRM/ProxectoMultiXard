import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariadoComponent } from './funcionariado.component';

describe('FuncionariadoComponent', () => {
  let component: FuncionariadoComponent;
  let fixture: ComponentFixture<FuncionariadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
