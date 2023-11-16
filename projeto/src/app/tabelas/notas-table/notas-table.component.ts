import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/Aluno.service';

@Component({
  selector: 'app-notas-table',
  templateUrl: './notas-table.component.html',
  styleUrls: ['./notas-table.component.scss']
})
export class NotasTableComponent implements OnInit {
  alunos: any[] = []; // Array para armazenar os alunos
  displayedColumns: string[] = ['aluno','turma','disciplina', 'n1', 'n2', 'mf'];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.carregarAlunos(); // Ao inicializar o componente, carrega os alunos
  }

  carregarAlunos() {
    this.alunoService.getAlunos().subscribe(
      (data: any) => {
        this.alunos = data; // Atualiza a lista de alunos com os dados obtidos do serviço
      },
      (error) => {
        console.error('Erro ao carregar alunos:', error);
      }
    );
  }

  /*notas = [
    { aluno:'fulano', disciplina: 'Teste e Métricas', n1: 7.5, n2: 8.0, mf: 7.75 },
    { aluno:'fulano', disciplina: 'Laboratório de Inovação IV', n1: 8.0, n2: 7.5, mf: 7.75 },
    { aluno:'fulano', disciplina: 'Programação OO', n1: 8.0, n2: 7.5, mf: 7.75 }
  ]; */
  
}
