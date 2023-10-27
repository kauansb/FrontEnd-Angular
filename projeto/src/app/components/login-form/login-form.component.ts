import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  canShow: boolean = false
  isProf: boolean = false

  constructor () {}

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
