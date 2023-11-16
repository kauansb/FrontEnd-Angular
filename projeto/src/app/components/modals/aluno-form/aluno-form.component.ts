import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Aluno } from 'src/app/interfaces/Aluno';
import { AlunoService } from 'src/app/services/Aluno.service';

interface NovaEstrutura {
  disciplina: string;
  n1: number;
  n2: number;
}

interface AlunoAjustado extends Aluno {
  disciplinas: number[];
  notas: NovaEstrutura[];
}

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent {
  novoAluno: AlunoAjustado = {
    id: 0,
    nome: '',
    turma: '',
    disciplinas: [], // Array vazio para disciplinas
    notas: [], // Array vazio para notas
    mf: 0
  };

  constructor(public dialogRef: MatDialogRef<AlunoFormComponent>, private alunoService: AlunoService) {}

  criarNovoAluno() {
    const { nome, turma, notas } = this.novoAluno;

    // Mapeia as notas do novo aluno
    const notasMapeadas = notas.map(({ disciplina, n1, n2 }) => ({ disciplina, n1, n2 }));

    const aluno: AlunoAjustado = {
      id: 0, // Defina o ID conforme necessário ou ajuste a lógica
      nome,
      turma,
      disciplinas: [], // Certifique-se de ajustar conforme a lógica do seu sistema
      notas: notasMapeadas,
      mf: 0 // Certifique-se de ajustar conforme a lógica do seu sistema
    };

    this.alunoService.criarAluno(aluno).subscribe(
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
    this.dialogRef.close(); // Fecha o modal sem salvar
  }
}
