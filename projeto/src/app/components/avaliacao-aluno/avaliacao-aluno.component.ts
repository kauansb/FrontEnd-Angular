import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlunoService } from 'src/app/services/Aluno.service';
import { Aluno } from 'src/app/interfaces/Aluno';

@Component({
  selector: 'app-avaliacao-aluno',
  templateUrl: './avaliacao-aluno.component.html',
  styleUrls: ['./avaliacao-aluno.component.scss']
})
export class AvaliacaoAlunoComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private location: Location, private router: Router, private alunoService: AlunoService) {}
  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoService.getAlunos().subscribe(
      (data) => {
        this.alunos = data; // Atualizando a lista de alunos
        console.log(this.alunos); // Verificar se a lista foi atualizada corretamente
      },
      (error) => {
        console.error('Erro ao carregar alunos:', error);
      }
    );
  }
  
  
  criarNovoAluno() {
    const novoAluno = { nome: 'Novo Aluno', turma: 'Turma A' };
    this.alunoService.criarAluno(novoAluno).subscribe(
      (data) => {
        console.log('Novo aluno criado:', data);
        // Recarregar a lista de alunos após adicionar um novo aluno
        this.carregarAlunos();
        console.log(this.alunos)
      },
      (error) => {
        console.error('Erro ao criar novo aluno:', error);
      }
    );
    
  }

  goBack(): void {
    this.location.back();
  }

  deslogar() {
    this.router.navigate(['/login'])
  }
}
