import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pestana3Component } from './pestana3.component';

describe('Pestana3Component', () => {
  let component: Pestana3Component;
  let fixture: ComponentFixture<Pestana3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pestana3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pestana3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
