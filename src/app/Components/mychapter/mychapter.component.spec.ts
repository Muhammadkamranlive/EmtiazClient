import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychapterComponent } from './mychapter.component';

describe('MychapterComponent', () => {
  let component: MychapterComponent;
  let fixture: ComponentFixture<MychapterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MychapterComponent]
    });
    fixture = TestBed.createComponent(MychapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
