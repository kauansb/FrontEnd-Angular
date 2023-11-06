import { Component } from '@angular/core';

@Component({
  selector: 'app-faltas-table',
  templateUrl: './faltas-table.component.html',
  styleUrls: ['./faltas-table.component.scss']
})
export class FaltasTableComponent {
  faltas = [
    { disciplina: 'Teste e Métricas', mes1: 5, mes2: 3, mes3: 2, mes4: 1, total: 11 },
    { disciplina: 'Laboratório de Inovação IV', mes1: 4, mes2: 2, mes3: 3, mes4: 1, total: 10 },
    { disciplina: 'Programação OO', mes1: 4, mes2: 2, mes3: 3, mes4: 1, total: 10 },
    // Adicione mais disciplinas e faltas conforme necessário
  ];
  displayedColumns: string[] = ['disciplina', 'mes1', 'mes2', 'mes3', 'mes4', 'total'];
}
