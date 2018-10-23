import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteArythmetiquePage } from './suite-arythmetique.page';

describe('SuiteArythmetiquePage', () => {
  let component: SuiteArythmetiquePage;
  let fixture: ComponentFixture<SuiteArythmetiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteArythmetiquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteArythmetiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
