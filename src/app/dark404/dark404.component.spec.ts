import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dark404Component } from './dark404.component';

describe('Dark404Component', () => {
  let component: Dark404Component;
  let fixture: ComponentFixture<Dark404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dark404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dark404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
