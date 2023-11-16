import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AlunoService } from 'src/app/services/Aluno.service';
import { Aluno } from 'src/app/interfaces/Aluno';
import { MatDialog } from '@angular/material/dialog';
import { AlunoFormComponent } from 'src/app/components/modals/aluno-form/aluno-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao-aluno',
  templateUrl: './avaliacao-aluno.component.html',
  styleUrls: ['./avaliacao-aluno.component.scss']
})
export class AvaliacaoAlunoComponent {
  alunos: Aluno[] = [];

  constructor(private location: Location, private alunoService: AlunoService, private router: Router, public dialog: MatDialog) {}


  abrirModalAdicionarAluno(): void {
    const dialogRef = this.dialog.open(AlunoFormComponent, {
      width: '500px',
      height:'500px' // Ajuste o tamanho do modal conforme necessário
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      // result contém os dados do aluno após fechar o modal
      if (result) {
        console.log('Novo aluno:', result);
        // Chame sua função para salvar o novo aluno
        // this.alunoService.criarAluno(result).subscribe(response => { });
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  deslogar() {
    this.router.navigate(['/login'])
  }

}
