import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenvidaComponent } from './benvida.component';

describe('BenvidaComponent', () => {
  let component: BenvidaComponent;
  let fixture: ComponentFixture<BenvidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenvidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
