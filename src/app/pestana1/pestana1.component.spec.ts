import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pestana1Component } from './pestana1.component';

describe('Pestana1Component', () => {
  let component: Pestana1Component;
  let fixture: ComponentFixture<Pestana1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pestana1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pestana1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
