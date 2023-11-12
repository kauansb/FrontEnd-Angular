import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from '../environments/environment';
import { Login } from '../interfaces/Login';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  private isAuthenticated = false;
  private userRole: string = '';
  public route = "auth";


    constructor(private httpClient: HttpClient){ }

    public login(loginData: Login): Observable<boolean> {
      return this.httpClient.post<boolean>(`${API_PATH}/${this.route}/login`, loginData)
        .pipe(
          tap((authenticated: boolean) => {
            this.isAuthenticated = authenticated;
            console.log(this.isAuthenticated);
            // Aqui você pode definir a lógica para obter a role do usuário a partir do backend
            // Por exemplo, você pode ter outro endpoint para obter detalhes do usuário
            // e armazenar a role em this.userRole.
          })
        );
    }

    cadastrarUsuario(dadosUsuario: Usuario) {
      return this.httpClient.post(`${API_PATH}/${this.route}/register`, dadosUsuario);
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
