import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  canShow: boolean = false
  isProf: boolean = false
  tittle: string = "Bem-vindo"

  constructor (private router: Router) {}
  redirectToTelaCadastro() {
    this.router.navigate(['/tela-cadastro']);
  }

  ngOnInit():void {}
  
    showFormAluno = () => {
      this.canShow = true
      this.isProf = false
    }
  
    showFormProf = () => {
      this.canShow = true
      this.isProf = true
    }
}
