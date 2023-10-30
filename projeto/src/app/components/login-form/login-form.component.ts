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

  constructor (private router: Router) {}
  redirectToTelaCadastro() {
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
