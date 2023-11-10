import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from '../environments/environment';
import { ILogin } from '../interfaces/ILogin';

@Injectable({
  providedIn: 'root'
})

export class TesteService{
    constructor(private httpClient: HttpClient){ }

    CriarLogin() {
      return this.httpClient.post<ILogin>(`${API_PATH}register`, {
        email: "KauanBaitola1@api.com",
        senha: "2424",
        role: "admin"
      }).toPromise()
        .catch(error => {
          console.error("Erro na solicitação HTTP:", error);
          throw error;
        });
    }


}

