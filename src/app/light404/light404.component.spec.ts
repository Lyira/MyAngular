import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light404Component } from './light404.component';

describe('Light404Component', () => {
  let component: Light404Component;
  let fixture: ComponentFixture<Light404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
