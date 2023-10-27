import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsFormComponent } from './btns-form.component';

describe('BtnsFormComponent', () => {
  let component: BtnsFormComponent;
  let fixture: ComponentFixture<BtnsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnsFormComponent]
    });
    fixture = TestBed.createComponent(BtnsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
