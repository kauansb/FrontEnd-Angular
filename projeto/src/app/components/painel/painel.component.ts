import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent {
  canShowAluno: boolean = false;
  canShowAdmin: boolean = false;
  canShowProfessor: boolean = false;

  constructor(private router: Router, private location: Location) {}

  deslogar() {
    this.router.navigate(['/login'])
  }
  goBack(): void {
    this.location.back();
  }

  redirectToAlterarSenha() {
    this.router.navigate(['/alterarSenha']);
  }  
  redirectToAvaliacaoAluno() {
    this.router.navigate(['/avaliacao']);
  }  

  }

