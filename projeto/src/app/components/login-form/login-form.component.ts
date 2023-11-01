import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  username: string = '';
  password: string = '';
  role: string = '';
  canShow: boolean = false;
  isProf: boolean = false;
  isAdmin: boolean = false;
  isAluno: boolean = false;

  constructor (private router: Router,private authService: AuthService) {}

  onLogin(): void {
    if (this.authService.login(this.username, this.password, this.role)) {
      // Verifique o papel do usuário e redirecione com base nisso
      if (this.authService.getUserRole() === 'admin') {
        this.router.navigate(['/painel']);
      }else if (this.authService.getUserRole() === 'aluno') {
        this.router.navigate(['/painel']);
      }else if (this.authService.getUserRole() === 'professor') {
        this.router.navigate(['/painel']);
      }    
    } else {
      alert('Usuário inválido');
    }
  }

  redirectToTelaCadastro() {
    this.router.navigate(['/cadastro']);
  }  

  ngOnInit():void {}
  
    showFormAluno = () => {
      this.canShow = true;
      this.isAluno = true;
      this.isProf = false;
      this.isAdmin = false;
    }
  
    showFormProf = () => {
      this.canShow = true;
      this.isProf = true;
      this.isAdmin = false;
      this.isAluno = false;
    }

    showFormAdmin = () => {
      this.canShow = true;
      this.isAdmin = true;
      this.isProf = false;
      this.isAluno = false;
    }

    
}
