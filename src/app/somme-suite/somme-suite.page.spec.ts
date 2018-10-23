import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SommeSuitePage } from './somme-suite.page';

describe('SommeSuitePage', () => {
  let component: SommeSuitePage;
  let fixture: ComponentFixture<SommeSuitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SommeSuitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SommeSuitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
