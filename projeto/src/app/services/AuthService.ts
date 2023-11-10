import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string = ''; // Pode ser 'admin', 'professor'ou 'aluno'

  constructor(private httpClient: HttpClient){ }


  login(username: string, password: string, _userRole: string): boolean {
    // Simule uma verificação de credenciais (pode ser substituída por uma lógica real)
    if (username === 'admin' && password === '123') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      console.log('Tentativa de login com:', username,this.userRole); //teste
      return true;
    }
    if (username === 'aluno' && password === '123') {
      this.isAuthenticated = true;
      this.userRole = 'aluno';
      console.log('Tentativa de login com:', username,this.userRole); //teste
      return true;
    }
    else if (username === 'professor' && password === '123') {
      this.isAuthenticated = true;
      this.userRole = 'professor';
      console.log('Tentativa de login com:', username,this.userRole); //teste
      return true;
    }
    return this.isAuthenticated;

  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = '';
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string {
    return this.userRole;
  }

  // Código abaixo apenas para teste!!!! -------------------
  
  changePassword(username: string, oldPassword: string, newPassword: string): boolean {
    // Aqui você deve implementar a lógica para alterar a senha do usuário.
    // Isso pode incluir a verificação da senha antiga e a atualização da senha no armazenamento.

    // Simule uma verificação de senha antiga (isso pode variar dependendo de como as senhas são armazenadas)
    if (!this.verifyOldPassword(username, oldPassword)) {
      return false; // Senha antiga incorreta
    }

    // Simule a atualização da senha (isso pode variar dependendo de como as senhas são armazenadas)
    this.updatePassword(username, newPassword);

    return true; // Senha alterada com sucesso
  }

  private verifyOldPassword(username: string, oldPassword: string): boolean {
    // Implemente a lógica para verificar a senha antiga
    // Isso pode envolver a comparação da senha antiga armazenada com a senha fornecida

    // Simule uma verificação simples (substitua por uma lógica real)
    const storedPassword = this.getPasswordByUsername(username);
    return oldPassword === storedPassword;
  }

  private updatePassword(username: string, newPassword: string): void {
    // Implemente a lógica para atualizar a senha do usuário
    // Isso pode envolver a atualização da senha no armazenamento (por exemplo, banco de dados)

    // Simule a atualização da senha (substitua por uma lógica real)
    this.setPasswordByUsername(username, newPassword);
  }

  private getPasswordByUsername(username: string): string {
    // Implemente a lógica para obter a senha do usuário com base no nome de usuário
    // Isso pode envolver a consulta de um banco de dados ou outro armazenamento

    // Simule a obtenção da senha (substitua por uma lógica real)
    if (username === 'aluno') {
      return 'hashed_password'; // Substitua por uma senha real ou hash
    }
    else if (username === 'admin') {
      return 'hashed_password'; // Substitua por uma senha real ou hash
    }
    else if (username === 'professor') {
      return 'hashed_password'; // Substitua por uma senha real ou hash
    }

    return ''; // Retorna uma senha vazia se o usuário não for encontrado
  }

  private setPasswordByUsername(username: string, password: string): void {
    // Implemente a lógica para atualizar a senha do usuário no armazenamento
    // Isso pode envolver a atualização de um banco de dados ou outro armazenamento

    // Simule a atualização da senha (substitua por uma lógica real)
    // Atualize a senha para o usuário com o nome de usuário especificado
  }
}
