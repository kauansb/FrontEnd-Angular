import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string = ''; // Pode ser 'admin', 'professor'ou 'aluno'

  login(username: string, password: string, _userRole: string): boolean {
    // Simule uma verificação de credenciais (pode ser substituída por uma lógica real)
    if (username === 'admin' && password === '123') {
      console.log('Tentativa de login com:', username,this.userRole); //teste
      this.isAuthenticated = true;
      this.userRole = 'admin';
      return true;
    }
    if (username === 'aluno' && password === '123') {
      console.log('Tentativa de login com:', username,this.userRole); //teste
      this.isAuthenticated = true;
      this.userRole = 'aluno';
      return true;
    }
    else if (username === 'professor' && password === '123') {
      console.log('Tentativa de login com:', username,this.userRole); //teste
      this.isAuthenticated = true;
      this.userRole = 'professor';
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
}
