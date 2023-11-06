import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltasTableComponent } from './faltas-table.component';

describe('FaltasTableComponent', () => {
  let component: FaltasTableComponent;
  let fixture: ComponentFixture<FaltasTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaltasTableComponent]
    });
    fixture = TestBed.createComponent(FaltasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
