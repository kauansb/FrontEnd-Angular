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

  constructor (private router: Router,private authService: AuthService) {}

  onLogin(): void {
    if (this.authService.login(this.username, this.password, this.role)) {
      alert('Conectado com Sucesso!')
      this.router.navigate(['/painel']);
    } else {
      alert('Usuário inválido');
      
    }
  }

  redirectToTelaCadastro() {
    this.router.navigate(['/cadastro']);
  }  

  ngOnInit():void {}
  
    showForm = () => {
      this.canShow = true;
      this.isProf = false;
    }
  
    showFormProf = () => {
      this.canShow = true;
      this.isProf = true;
    }

    
}
