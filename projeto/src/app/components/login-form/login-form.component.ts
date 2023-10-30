import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  canShow: boolean = false;
  isProf: boolean = false;
  showLoginFormComponentContent: boolean = true;
  showCadastroFormComponent: boolean = false;

  constructor (private router: Router) {}
  redirectToTelaCadastro() {
    this.showLoginFormComponentContent = false;
    this.showCadastroFormComponent = true;
    this.router.navigate(['/cadastro']);
  }  

  ngOnInit():void {}
  
    showFormAluno = () => {
      this.canShow = true;
      this.isProf = false;
    }
  
    showFormProf = () => {
      this.canShow = true;
      this.isProf = true;
    }
    
}
