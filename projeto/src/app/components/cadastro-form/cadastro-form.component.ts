import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component'
import { Usuario } from 'src/app/interfaces/Usuario';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/AuthService';
import { TesteService } from 'src/app/services/Teste.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent{

  canShow: boolean = false;
  isProf: boolean = false;
  isAdmin: boolean = false;
  isAluno: boolean = false;

  novoUsuario: Usuario = {
    nome: '',
    cpf: '',
    tel: '',
    dataNascimento: '',
    endereco: '',
    nivelFormacao: '',
    email: '',
    areaEspecializacao: '' // Preencha conforme necessário
  };

  constructor(private authService: AuthService, private login: LoginFormComponent, private location: Location,private testeService: TesteService ) {}

  cadastrar(): void {
    this.testeService.cadastrarUsuario(this.novoUsuario).subscribe(
      resposta => {
        console.log('Cadastro bem-sucedido:', resposta);
        // Você pode redirecionar o usuário ou executar outras ações aqui
      },
      erro => {
        console.error('Erro ao cadastrar:', erro);
        // Lide com erros aqui
      }
    );
  }

   ngOnInit():void {}

    showFormCadastroAluno = () => {
      this.canShow = true
      this.isProf = false
    }
  
    showFormCadastroProf = () => {
      this.canShow = true
      this.isProf = true
    }

    goBack(): void {
      this.location.back();
    }

}
