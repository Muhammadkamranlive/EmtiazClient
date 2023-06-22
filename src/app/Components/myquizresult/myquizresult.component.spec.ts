import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquizresultComponent } from './myquizresult.component';

describe('MyquizresultComponent', () => {
  let component: MyquizresultComponent;
  let fixture: ComponentFixture<MyquizresultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyquizresultComponent]
    });
    fixture = TestBed.createComponent(MyquizresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
