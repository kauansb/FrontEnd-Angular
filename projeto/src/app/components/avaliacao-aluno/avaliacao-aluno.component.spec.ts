import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoAlunoComponent } from './avaliacao-aluno.component';

describe('AvaliacaoAlunoComponent', () => {
  let component: AvaliacaoAlunoComponent;
  let fixture: ComponentFixture<AvaliacaoAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliacaoAlunoComponent]
    });
    fixture = TestBed.createComponent(AvaliacaoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
