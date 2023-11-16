import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/Aluno.service';

@Component({
  selector: 'app-notas-table',
  templateUrl: './notas-table.component.html',
  styleUrls: ['./notas-table.component.scss']
})
export class NotasTableComponent implements OnInit {
  alunos: any[] = []; // Array para armazenar os alunos
  displayedColumns: string[] = ['aluno','turma','disciplina', 'n1', 'n2', 'mf','actions'];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.carregarAlunos(); // Ao inicializar o componente, carrega os alunos
  }

  carregarAlunos() {
    this.alunoService.getAlunos().subscribe(  
      (data: any) => {
        this.alunos = data.alunos; // Atualizando a lista de alunos
        console.log(this.alunos); // Verificar se a lista foi atualizada corretamente
      },
      (error) => {
        console.error('Erro ao carregar alunos:', error);
      }
    );
  }

  excluirAluno(id: number) {
    this.alunoService.deletarAluno(id).subscribe(
      () => {
        console.log('Aluno excluído com sucesso!');
        // Atualize a lista de alunos após a exclusão, se necessário
        this.carregarAlunos();
      },
      (error) => {
        console.error('Erro ao excluir aluno:', error);
      }
    );
  }
  

  
}
