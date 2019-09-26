import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProletariadoComponent } from './proletariado.component';

describe('ProletariadoComponent', () => {
  let component: ProletariadoComponent;
  let fixture: ComponentFixture<ProletariadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProletariadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProletariadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
