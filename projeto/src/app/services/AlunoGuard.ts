import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './w';

@Injectable({
  providedIn: 'root'
})
export class AlunoGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser() && this.authService.getUserRole() === 'aluno') {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirecionar para a página de login em caso de acesso negado
      return false;
    }
  }
}
