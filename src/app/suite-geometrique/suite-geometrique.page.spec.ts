import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteGeometriquePage } from './suite-geometrique.page';

describe('SuiteGeometriquePage', () => {
  let component: SuiteGeometriquePage;
  let fixture: ComponentFixture<SuiteGeometriquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteGeometriquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteGeometriquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
