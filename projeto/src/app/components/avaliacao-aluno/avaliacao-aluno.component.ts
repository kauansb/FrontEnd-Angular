import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao-aluno',
  templateUrl: './avaliacao-aluno.component.html',
  styleUrls: ['./avaliacao-aluno.component.scss']
})
export class AvaliacaoAlunoComponent {

  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    this.location.back();
  }

  deslogar() {
    this.router.navigate(['/login'])
  }
}
