import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';
import { Login } from 'src/app/interfaces/Login';
import { roleTypeEnum } from 'src/app/enums/roleTypeEnum';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  public email: string = '';
  public senha: string = '';

  constructor (private router: Router, private authService: AuthService) {
    
  }

  public loginData: Login = {
    email: '',
    senha: '',
    role: roleTypeEnum.admin
  };

  public fazerLogin() {
    this.authService.login(this.loginData).subscribe(
      authenticated => {
        if (authenticated) {
          console.log('Login bem-sucedido');
          this.router.navigate(['/painel']);
        }
      },
      error => {
        alert("Credenciais inválidas");
      }
    );
  }

  deslogar() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  public redirectToTelaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  ngOnInit():void {}

}
