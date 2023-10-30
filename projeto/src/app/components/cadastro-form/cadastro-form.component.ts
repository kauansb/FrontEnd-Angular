import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent implements OnInit {
  showLoginFormComponentContent = false
  showCadastroFormComponent = true
  canShow: boolean = false;
  isProf: boolean = false;

  constructor (private router: Router) {}

  ngOnInit():void {}
  
    showFormCadastroAluno = () => {
      this.canShow = true
      this.isProf = false
    }
  
    showFormCadastroProf = () => {
      this.canShow = true
      this.isProf = true
    }

    redirectToTelaLogin() {
      this.showLoginFormComponentContent = false;
      this.router.navigate(['/tela-login']);
    }

}
