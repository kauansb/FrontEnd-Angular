import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component'
@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent extends LoginFormComponent{

  override ngOnInit():void {}

    showFormCadastroAluno = () => {
      this.canShow = true
      this.isProf = false
    }
  
    showFormCadastroProf = () => {
      this.canShow = true
      this.isProf = true
    }

}
