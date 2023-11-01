import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  canShowAluno: boolean = false;
  canShowAdmin: boolean = false;
  canShowProfessor: boolean = false;

  constructor(private authService: AuthService,private router: Router) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  deslogar() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  showModule = () => {
    if (this.authService.getUserRole() === 'aluno'){
        this.canShowAluno = true;
    } else if (this.authService.getUserRole() === 'admin'){
        this.canShowAdmin = true;
    }else if (this.authService.getUserRole() === 'Professor'){
      this.canShowProfessor = true;
    }
    return this.canShowAluno, this.canShowAdmin, this.canShowProfessor;
    
  }

  }

