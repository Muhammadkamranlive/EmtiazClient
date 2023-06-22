import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequirtyComponent } from './sequirty.component';

describe('SequirtyComponent', () => {
  let component: SequirtyComponent;
  let fixture: ComponentFixture<SequirtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SequirtyComponent]
    });
    fixture = TestBed.createComponent(SequirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
