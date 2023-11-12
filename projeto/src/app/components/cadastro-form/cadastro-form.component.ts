import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/AuthService';
import { roleTypeEnum } from 'src/app/enums/roleTypeEnum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent {

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
    senha: '',
    areaEspecializacao: '',
    role: roleTypeEnum.admin
  };

    // Propriedades vinculadas ao ngModel formulário
    public nome: string = '';
    public cpf: string = '';
    public contato: string = '';
    public dataNascimento: string = '';
    public endereco: string = '';
    public nivelFormacao: string = '';
    public email: string = '';
    public senha: string = '';
    public areaEspecializacao: string = '';

  constructor(private router: Router, private location: Location, private authService: AuthService){}

  public cadastrar(): void {

    this.novoUsuario.email = this.email;
    this.novoUsuario.senha = this.senha;
    this.novoUsuario.role = this.getRoleSelected()


    this.authService.cadastrarUsuario(this.novoUsuario).subscribe(
      resposta => {
        console.log('Cadastro bem-sucedido:', resposta);
        this.router.navigate(['/login']);
        alert("Cadastro realizado com sucesso! Por favor realize o login inserindo suas credenciais")
      },
      erro => {
        console.error('Erro ao cadastrar:', erro);
        alert("Erro ao cadastrar. Por favor tente novamente mais tarde!!!");
      }
    );
  }

   showFormCadastro(tipoUsuario: string) {
    this.canShow = true;

    switch (tipoUsuario) {
      case 'aluno':
        this.isProf = false;
        this.isAdmin = false;
        this.isAluno = true;
        break;
      case 'admin':
        this.isProf = false;
        this.isAdmin = true;
        this.isAluno = false;
        break;
      case 'prof':
        this.isProf = true;
        this.isAdmin = false;
        this.isAluno = false;
        break;
      default:
        // Lidar com um tipo de usuário desconhecido, se necessário.
        break;
    }
  }

  public getRoleSelected() {
    if(this.isAdmin) return roleTypeEnum.admin;
    if(this.isAluno) return roleTypeEnum.aluno;
    if(this.isProf) return roleTypeEnum.professor;
    return roleTypeEnum.default;
  }

    goBack(): void {
      this.location.back();
    }

}


