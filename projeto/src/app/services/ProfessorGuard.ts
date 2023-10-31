import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class ProfessorGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    return this.authService.isAuthenticatedUser() && this.authService.getUserRole() === 'professor';
  }
}
