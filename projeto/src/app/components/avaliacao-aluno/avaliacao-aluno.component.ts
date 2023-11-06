import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-avaliacao-aluno',
  templateUrl: './avaliacao-aluno.component.html',
  styleUrls: ['./avaliacao-aluno.component.scss']
})
export class AvaliacaoAlunoComponent {

  constructor(private authService: AuthService, private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
