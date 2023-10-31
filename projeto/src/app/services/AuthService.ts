import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: string = ''; // Pode ser 'admin', 'professor', 'aluno', etc.

  login(username: string, password: string, _role: string): boolean {
    // Simule uma verificação de credenciais (pode ser substituída por uma lógica real)
    if (username === 'root' && password === '123') {
      this.isAuthenticated = true;
      this.userRole = 'admin'; // Define o papel do usuário
      return true;
    }
    if (username === 'aluno' && password === '123') {
      this.isAuthenticated = true;
      this.userRole = 'aluno'; 
      return true;
    }
    if (username === 'professor' && password === '123') {
      this.isAuthenticated = true;
      this.userRole = 'professor'; 
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string {
    return this.userRole;
  }
}
