import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyexercisesComponent } from './myexercises.component';

describe('MyexercisesComponent', () => {
  let component: MyexercisesComponent;
  let fixture: ComponentFixture<MyexercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyexercisesComponent]
    });
    fixture = TestBed.createComponent(MyexercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
