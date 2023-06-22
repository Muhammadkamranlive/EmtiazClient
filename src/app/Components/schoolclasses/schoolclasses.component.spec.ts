import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolclassesComponent } from './schoolclasses.component';

describe('SchoolclassesComponent', () => {
  let component: SchoolclassesComponent;
  let fixture: ComponentFixture<SchoolclassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolclassesComponent]
    });
    fixture = TestBed.createComponent(SchoolclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
