import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquizeaComponent } from './myquizea.component';

describe('MyquizeaComponent', () => {
  let component: MyquizeaComponent;
  let fixture: ComponentFixture<MyquizeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyquizeaComponent]
    });
    fixture = TestBed.createComponent(MyquizeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
