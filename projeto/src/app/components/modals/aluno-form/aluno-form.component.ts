import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Aluno } from 'src/app/interfaces/Aluno';
import { AlunoService } from 'src/app/services/Aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent {
  novoAluno: Aluno = { id: 0, nome: '', turma: '', disciplina: '', n1: 0, n2: 0, mf: 0 };

  constructor(public dialogRef: MatDialogRef<AlunoFormComponent>, private alunoService: AlunoService) {}

  criarNovoAluno() {
    this.alunoService.criarAluno(this.novoAluno).subscribe(
      (data) => {
        console.log('Novo aluno criado:', data);
        this.dialogRef.close(this.novoAluno);
      },
      (error) => {
        console.error('Erro ao criar novo aluno:', error);
      }
    );
  }

  cancelar(): void {
    this.dialogRef.close(); // Feche o modal sem salvar
  }
}
