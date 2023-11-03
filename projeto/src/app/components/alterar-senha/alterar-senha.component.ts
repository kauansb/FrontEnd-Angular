import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService';
import { Location } from '@angular/common';


@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss']
})
export class AlterarSenhaComponent {
  username: string = ''; // Pode ser o usuário logado
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private location: Location) {}

  onPasswordChange(): void {
    // Verifique se a nova senha e a confirmação de senha coincidem
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }

    // Tente alterar a senha usando o serviço de autenticação
    const success = this.authService.changePassword(this.username, this.oldPassword, this.newPassword);

    if (success) {
      // A senha foi alterada com sucesso
      this.errorMessage = '';
    } else {
      this.errorMessage = 'A senha antiga não está correta.';
    }
  }

  goBack(): void {
    this.location.back();
  }

  
}
