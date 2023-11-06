import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao-aluno',
  templateUrl: './avaliacao-aluno.component.html',
  styleUrls: ['./avaliacao-aluno.component.scss']
})
export class AvaliacaoAlunoComponent {

  constructor(private authService: AuthService, private location: Location, private router: Router) {}

  goBack(): void {
    this.location.back();
  }

  deslogar() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
