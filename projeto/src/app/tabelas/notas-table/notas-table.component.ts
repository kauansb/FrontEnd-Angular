import { Component } from '@angular/core';

@Component({
  selector: 'app-notas-table',
  templateUrl: './notas-table.component.html',
  styleUrls: ['./notas-table.component.scss']
})
export class NotasTableComponent {
  notas = [
    { disciplina: 'Teste e Métricas', n1: 7.5, n2: 8.0, mf: 7.75 },
    { disciplina: 'Laboratório de Inovação IV', n1: 8.0, n2: 7.5, mf: 7.75 },
    { disciplina: 'Programação OO', n1: 8.0, n2: 7.5, mf: 7.75 }
    // Adicione mais disciplinas e notas conforme necessário
  ];
  displayedColumns: string[] = ['disciplina', 'n1', 'n2', 'mf'];
}
