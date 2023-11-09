import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from '../environments/environment';
import { ILogin } from '../interfaces/ILogin';

@Injectable({
  providedIn: 'root'
})

export class TesteService{
    constructor(private httpClient: HttpClient){ }

    ObterLogin(){
        return this.httpClient.post<ILogin>(`${API_PATH}login`, {email: "asdasd", senha:"ASDASD"}).toPromise();
    }

}

